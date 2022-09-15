class Api::ProductsController < ApplicationController
      wrap_parameters include: Product.attribute_names + [:photo], format: :multipart_form

      def index
        @products = Product.all
      end 

      def show
        @product = Product.find(params[:id])
      end 

      def search 
          @parameter = params[:search].downcase
          @results = Product.where("lower(name) ILIKE ? OR desc ILIKE ?", "%#{@parameter}%", "%#{@parameter}%")

        if @results.length > 0
          render :index
        else 
          render :index
        end 
      end 

      private

      def product_params
        params.require(:product).permit(
            :name,
            :desc,
            :price,
            :photo
        )
      end 
end