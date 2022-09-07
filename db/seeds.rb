# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri';

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Product.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    name: 'Demo-lition', 
    email: 'demo@user.io', 
    password: 'password'
  )

   # More users
  10.times do 
    User.create!({
      name: Faker::Internet.domain_word,
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end



   product1 = Product.create!({
    name:"Future Noodles Variety Pack",
    desc:"Pack of 6",
    price: 40.00
  })
  file1 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/noodle-6-pack.jpg")
  product1.photo.attach(io: file1, filename: "noodle-6-pack.jpg")

   product2 = Product.create!({
    name:"Future Noodles Set",
    desc:"Pack of 3",
    price: 21.00
  })

  file2 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/noodle-set.jpg")
  product2.photo.attach(io: file2, filename: "noodle-set.jpg")

    product3 = Product.create!({
    name:"Organic Beansprouts",
    desc:"1 lb",
    price: 5.00
  })

  file3 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-beansprouts.jpg")
  product3.photo.attach(io: file3, filename: "beansprouts.jpg")

   product4 = Product.create!({
    name:"Frozen Edamame",
    desc:"400g package",
    price: 4.50
  })

  file4 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/edamame.jpg")
  product4.photo.attach(io: file4, filename: "edamame.jpg")

   product5 = Product.create!({
    name:"Extra Soft Silken Tofu",
    desc:"400g package",
    price: 4.50
  })

  file5 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/silken-tofu.jpg")
  product5.photo.attach(io: file5, filename: "silk-tofu.jpg")

  puts "Done!"
end