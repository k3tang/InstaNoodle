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
  ApplicationRecord.connection.reset_pk_sequence!('products')

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

  #noodles 

   product1 = Product.create!({
    name:"Future Noodles Variety Pack",
    desc:"Mix it up with our three signature flavours: Smoky Mushroom & Miso, Yellow Curry and Spicy Kimchi. Two pots of each.",
    price: 40.00
  })
  file1 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/noodle-6-pack.jpg")
  product1.photo.attach(io: file1, filename: "noodle-6-pack.jpg")


   product2 = Product.create!({
    name:"Future Noodles Set",
    desc:"Pack of 3, one of each of our 3 signature flavors: Smoky Mushroom & Miso, Yellow Curry and Spicy Kimchi",
    price: 21.00
  })
  file2 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/noodle-set.jpg")
  product2.photo.attach(io: file2, filename: "noodle-set.jpg")


  product3 = Product.create!({
    name:"Spicy Kimchi Noodles",
    desc:"A mega-tasty, spicy kimchi soup that tickles your brain with whole wheat noodles that make for a satisfying hot slurp.",
    price: 5.00
  })
  file3 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-spicy-kimchi.png")
  product3.photo.attach(io: file3, filename: "spicy-kimchi.png")

    product4 = Product.create!({
    name:"Yellow Curry Noodles",
    desc:"A satisfying, rich, turmeric and coconut soup with whole wheat noodles that give you a comforting, warm feeling in your belly.",
    price: 5.00
  })
  file4 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-yellow-curry.png")
  product4.photo.attach(io: file4, filename: "yellow-curry.png")


     product5 = Product.create!({
    name:"Smoky Mushroom & Miso Noodles",
    desc:"A real soul cleanser with smoky mushroom & miso and whole wheat noodles that nourish your soul with every slurp.",
    price: 5.00
  })
  file5 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-smoky-mushroom.png")
  product5.photo.attach(io: file5, filename: "product-smoky-mushroom.png")


  

#vegetables 

    product6 = Product.create!({
    name:"Organic Beansprouts",
    desc:"Vibrant in color, mild in flavor, a perfect crunchy edition.",
    price: 2.70
  })
  file6 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-beansprouts.jpg")
  product6.photo.attach(io: file6, filename: "product-beansprouts.jpg")

 
  product7 = Product.create!({
    name:"Cucumbers",
    desc:"Light, refreshing, and perfectly crunchy.",
    price: 3.00
  })
  file7 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-cucumber.png")
  product7.photo.attach(io: file7, filename: "product-cucumber.png")

  product8 = Product.create!({
    name:"Red Thai Chilis",
    desc:"Small, but fiery.",
    price: 5.00
  })
  file8 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-red-chili.png")
  product8.photo.attach(io: file8, filename: "product-red-chili.png")

   product9 = Product.create!({
    name:"Organic Bokchoy",
    desc:"A nutritious, leafy green bundle of goodness.",
    price: 4.50
  })
  file9 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-bokchoy.png")
  product9.photo.attach(io: file9, filename: "product-bokchoy.png")

     product10 = Product.create!({
    name:"Organic Beech Mushrooms",
    desc:"A small, but meaty mushroom loaded with flavor.",
    price: 3.50
  })
  file10 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-mushroom.png")
  product10.photo.attach(io: file10, filename: "product-mushroom.png")

#packaged goods 

   product11 = Product.create!({
    name:"Frozen Edamame",
    desc:"Protein loaded, mild in flavor with a great chewy texture.",
    price: 3.50
  })
  file11 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/edamame.jpg")
  product11.photo.attach(io: file11, filename: "edamame.jpg")

   product12 = Product.create!({
    name:"Extra Soft Silken Tofu",
    desc:"400g package",
    price: 4.12
  })
  file12 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/silken-tofu.jpg")
  product12.photo.attach(io: file12, filename: "silk-tofu.jpg")

  product13 = Product.create!({
    name:"Spicy Kimchi in a Jar",
    desc:"A probiotic loaded pickled cabbage with loads of flavor.",
    price: 6.50
  })
  file13 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-kimchi-jar.png")
  product13.photo.attach(io: file13, filename: "product-kimchi-jar.png")

  product14 = Product.create!({
    name:"Frozen Gyoza (Potstickers)",
    desc:"Leek flavored and packed with umami, pan-fry or boil to serve with noodles.",
    price: 7.50
  })
  file14 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-gyoza.png")
  product14.photo.attach(io: file14, filename: "product-gyoza.png")

  product15 = Product.create!({
    name:"Roasted Sesame Seeds",
    desc:"Golden brown sesame seeds, fragrant and toasty!",
    price: 5.50
  })
  file15 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-sesame.png")
  product15.photo.attach(io: file15, filename: "product-sesame.png")

  # wares 

  product16 = Product.create!({
    name:"Colorful Chopstick Sets",
    desc:"Laquered wooden chopsticks",
    price: 15.50
  })
  file16 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-chopsticks.png")
  product16.photo.attach(io: file16, filename: "product-chopsticks.png")

  product17 = Product.create!({
    name:"Handthrown Ramen Bowl",
    desc:"A textured ramen bowl with a pop of color, sized to fit all your ramen needs.",
    price: 15.50
  })
  file17 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-noodle-bowl.png")
  product17.photo.attach(io: file17, filename: "product-noodle-bowl.png")

  product18 = Product.create!({
    name:"Kitchen Timer",
    desc:"A trusty friend in the kitchen, the ultimate guard against soggy noodles.",
    price: 14.50
  })
  file18 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-timer.png")
  product18.photo.attach(io: file18, filename: "product-timer.png")

 product19 = Product.create!({
    name:"Japanese Ramen Spoons",
    desc:"The perfect vessel for a little bit of everything.",
    price: 22.50
  })
  file19 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-spoon.png")
  product19.photo.attach(io: file19, filename: "product-spoon.png")

   product20 = Product.create!({
    name:"The Ultimate Ramen Cooker Set",
    desc:"The all-in-one set for serious ramen fans.",
    price: 12.50
  })
  file20 = URI.open("https://instanoodles-dev.s3.us-west-1.amazonaws.com/product-ramen-cooker.png")
  product20.photo.attach(io: file20, filename: "product-ramen-cooker.png")


  puts "Done!"
end