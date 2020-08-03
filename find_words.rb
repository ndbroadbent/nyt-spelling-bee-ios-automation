#!/usr/bin/env ruby
require 'yaml'

config = YAML.load_file('./config.yml')
letters = config['letters']
regex = Regexp.new("^[#{letters.join}]{4,}$")

words = File.read('./words.txt').lines

matches = []
words.each do |_word|
  word = _word.strip.downcase
  next unless word.include?(letters[0])

  next unless word.match? regex
  matches << word
end

puts "Found #{matches.length} matching words!"
puts matches.inspect
