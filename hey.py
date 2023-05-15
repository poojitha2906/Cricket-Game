from PIL import Image

# Open the image file
image = Image.open('C:\Users\ASUS\OneDrive\Desktop\CRICKET QUIZ APP\Images')

# Upscale the image by a factor of 2
upscaled_image = image.resize((image.width * 2, image.height * 2), resample=Image.BICUBIC)

# Save the upscaled image
upscaled_image.save('output_image.jpg')
