# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.delete_all
Provider.delete_all
Visit.delete_all

User.create(first_name: 'John', last_name: 'Smith', username: 'BestDev', password: 'guest', email: 'dev@test.com')
Provider.create(first_name: 'Antony', last_name: 'Todd', title: 'Dr.')
Visit.create(user_id: 1, provider_id: 1, purpose: 'Annual Exam')
