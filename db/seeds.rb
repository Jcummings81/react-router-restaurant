

100.times do
    Menu.create(
        name: Faker::Commerce.product_name,
        description: Faker::Lorem.sentence,
        price: Faker::Commerce.price.to_f
    )
end