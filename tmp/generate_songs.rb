require 'json'
require 'pathname'

JSON.parse(File.read('tmp/songs.json')).each do |id, contents|
  target = Pathname.new("src/songs/#{id}.mdx")
  target.parent.mkpath
  target.write(contents)
end