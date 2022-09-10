class User < ApplicationRecord
  has_secure_password

  validates :name, :email, :session_token, presence: true
  validates :session_token, :email, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
  validates :name, format: {without: URI::MailTo::EMAIL_REGEXP}
  validates :password, length: {in: 6..255}, allow_nil: true

    before_validation :ensure_session_token

    # has_many :cart_items,
    #   dependent: destroy

    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      
      if user
        return user if user.authenticate(password)
      end
          
      false
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    save!
    session_token
  end

  private 

   def generate_unique_session_token
    while true
      session_token = SecureRandom.urlsafe_base64
      return session_token if !User.exists?(session_token)
    end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end


end
