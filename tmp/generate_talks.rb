require 'json'
require 'pathname'

JSON.parse(File.read('tmp/talks.json')).each do |id, contents|
  target = Pathname.new("src/talks/#{id}.mdx")
  target.parent.mkpath
  target.write("---\n#{contents}---\n")
end