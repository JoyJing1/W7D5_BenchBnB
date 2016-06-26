# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

my_rand = Random.new(2084)
# my_rand.rand(37.726811..37.805924)
# my_rand.rand(-122.512432..-122.389522)

Bench.destroy_all()

Bench.create!([
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)},
  {description: Faker::Hipster.sentence, lat: my_rand.rand(37.726811..37.805924), lng: my_rand.rand(-122.512432..-122.389522)}
])
