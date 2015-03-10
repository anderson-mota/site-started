#require "susy";
#require "breakpoint";

http_path = "/"
css_dir = "public/css"
sass_dir = "src/sass"
images_dir = "public/images"
javascripts_dir = "public/js"
output_style = :compressed # :expanded or :nested or :compact or :compressed
sourcemap = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass