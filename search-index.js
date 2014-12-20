var searchIndex = {};
searchIndex['image'] = {"items":[[0,"","image","This crate provides native rust implementations of\nImage encoders and decoders and basic image manipulation\nfunctions."],[1,"Luma","","Grayscale colors"],[1,"LumaA","","Grayscale colors + alpha channel"],[1,"Rgb","","RGB colors"],[1,"Rgba","","RGB colors + alpha channel"],[1,"SubImage","","A View into another image"],[1,"ImageBuffer","","Generic image buffer"],[1,"Pixels","","Immutable pixel iterator"],[1,"MutPixels","","Mutable pixel iterator"],[2,"ColorType","","An enumeration over supported color types and their bit depths"],[12,"Grey","","Pixel is greyscale",0],[12,"RGB","","Pixel contains R, G and B channels",0],[12,"Palette","","Pixel is an index into a color palette",0],[12,"GreyA","","Pixel is greyscale with an alpha channel",0],[12,"RGBA","","Pixel is RGB with an alpha channel",0],[2,"ImageError","","An enumeration of Image Errors"],[12,"FormatError","","The Image is not formatted properly",1],[12,"DimensionError","","The Image's dimensions are either too small or too large",1],[12,"UnsupportedError","","The Decoder does not support this image format",1],[12,"UnsupportedColor","","The Decoder does not support this color type",1],[12,"NotEnoughData","","Not enough data was provided to the Decoder\nto decode the image",1],[12,"IoError","","An I/O Error occurred while decoding the image",1],[12,"ImageEnd","","The end of the image has been reached",1],[2,"ImageFormat","","An enumeration of supported image formats.\nNot all formats support both encoding and decoding."],[12,"PNG","","An Image in PNG Format",2],[12,"JPEG","","An Image in JPEG Format",2],[12,"GIF","","An Image in GIF Format",2],[12,"WEBP","","An Image in WEBP Format",2],[12,"PPM","","An Image in PPM Format",2],[12,"TIFF","","An Image in TIFF Format",2],[12,"TGA","","An Image in TGA Format",2],[2,"FilterType","","Available Sampling Filters"],[12,"Nearest","","Nearest Neighbor",3],[12,"Triangle","","Linear Filter",3],[12,"CatmullRom","","Cubic Filter",3],[12,"Gaussian","","Gaussian Filter",3],[12,"Lanczos3","","Lanczos with window 3",3],[2,"DynamicImage","","A Dynamic Image"],[12,"ImageLuma8","","Each pixel in this image is 8-bit Luma",4],[12,"ImageLumaA8","","Each pixel in this image is 8-bit Luma with alpha",4],[12,"ImageRgb8","","Each pixel in this image is 8-bit Rgb",4],[12,"ImageRgba8","","Each pixel in this image is 8-bit Rgb with alpha",4],[3,"open","","Open the image located at the path specified.\nThe image's format is determined from the path's file extension."],[3,"load","","Create a new image from a Reader"],[3,"load_from_memory","","Create a new image from a byte slice"],[3,"save_buffer","","Saves the supplied buffer to a file at the path specified."],[0,"imageops","","Image Processing Functions"],[3,"rotate90","image::imageops","Rotate an image 90 degrees clockwise."],[3,"rotate180","","Rotate an image 180 degrees clockwise."],[3,"rotate270","","Rotate an image 270 degrees clockwise."],[3,"flip_horizontal","","Flip an image horizontally"],[3,"flip_vertical","","Flip an image vertically"],[3,"filter3x3","","Perform a 3x3 box filter on the supplied image.\n```kernel``` is an array of the filter weights of length 9."],[3,"resize","","Resize the supplied image to the specified dimensions\n```nwidth``` and ```nheight``` are the new dimensions.\n```filter``` is the sampling filter to use."],[3,"blur","","Performs a Gaussian blur on the supplied image.\n```sigma``` is a measure of how much to blur by."],[3,"unsharpen","","Performs an unsharpen mask on the supplied image\n```sigma``` is the amount to blur the image by.\n```threshold``` is the threshold for the difference between\nsee https://en.wikipedia.org/wiki/Unsharp_masking#Digital_unsharp_masking"],[3,"grayscale","","Convert the supplied image to grayscale"],[3,"invert","","Invert each pixel within the supplied image\nThis function operates in place."],[3,"contrast","","Adjust the contrast of the supplied image\n```contrast``` is the amount to adjust the contrast by.\nNegative values decrease the contrast and positive values increase the contrast."],[3,"brighten","","Brighten the supplied image\n```value``` is the amount to brighten each pixel by.\nNegative values decrease the brightness and positive values increase it."],[3,"crop","","Return a mutable view into an image"],[3,"overlay","","Overlay an image at a given coordinate (x, y)"],[0,"webp","image","Decoding of Webp Images"],[1,"WebpDecoder","image::webp","A Representation of a Webp Image format decoder."],[10,"new","","Create a new WebpDecoder from the Reader ```r```.\nThis function takes ownership of the Reader.",5],[10,"dimensions","","",5],[10,"colortype","","",5],[10,"row_len","","",5],[10,"read_scanline","","",5],[10,"read_image","","",5],[0,"vp8","","An implementation of the VP8 Video Codec"],[1,"Frame","image::webp::vp8","A Representation of the last decoded video frame"],[11,"width","","The width of the luma plane",6],[11,"height","","The height of the luma plane",6],[11,"ybuf","","The luma plane of the frame",6],[11,"keyframe","","Indicates whether this frame is a keyframe",6],[11,"for_display","","Indicates whether this frame is intended for display",6],[11,"pixel_type","","The pixel type of the frame as defined by Section 9.2\nof the VP8 Specification",6],[1,"VP8Decoder","","VP8 Decoder\nOnly decodes keyframes"],[10,"clone","","",6],[10,"fmt","","",6],[10,"default","","",6],[10,"new","","Create a new decoder.\nThe reader must present a raw vp8 bitstream to the decoder",7],[10,"decode_frame","","Decodes the current frame and returns a reference to it",7],[0,"ppm","image","Encoding of portable pixmap Images"],[1,"PPMEncoder","image::ppm","A representation of a PPM encoder."],[10,"new","","Create a new PPMEncoder from the Writer ```w```.\nThis function takes ownership of the Writer.",8],[10,"encode","","Encode the buffer ```im``` as a PPM image.\n```width``` and ```height``` are the dimensions of the buffer.\n```color``` is the buffers ColorType.",8],[0,"png","image","Decoding and Encoding of PNG Images"],[1,"PNGDecoder","image::png","The representation of a PNG decoder"],[1,"PNGEncoder","","The representation of a PNG encoder"],[10,"new","","Create a new decoder that decodes from the stream ```r```",9],[10,"palette","","Returns a reference to the color palette used for indexed\ncolor images.\nEach array element is a tuple of RGB values.",9],[10,"dimensions","","",9],[10,"colortype","","",9],[10,"row_len","","",9],[10,"read_scanline","","",9],[10,"read_image","","",9],[10,"new","","Create a new encoder that writes its output to ```w```",10],[10,"encode","","Encodes the image ```image```\nthat has dimensions ```width``` and ```height```\nand ```ColorType``` ```c```",10],[0,"zlib","","An Implementation of RFC 1950"],[1,"ZlibDecoder","image::png::zlib","A Zlib compressed stream decoder."],[10,"new","","Create a new decoder that decodes from a Reader",11],[10,"inner","","Return a mutable reference to the wrapped Reader",11],[10,"read","","",11],[0,"deflate","image::png","An Implementation of RFC 1951"],[1,"Inflater","image::png::deflate","A DEFLATE compressed stream decoder."],[10,"new","","Create a new decoder that decodes from a Reader",12],[10,"eof","","Indicate whether the end of the stream has been reached.",12],[10,"inner","","Return a mutable reference to the wrapped Reader",12],[10,"read","","",12],[0,"hash","image::png","This module provides implementations of common hashing algorithms."],[1,"Adler32","image::png::hash","An Implementation of the Adler-32 checksum"],[1,"Crc32","","An Implementation of the Crc-32 checksum"],[10,"new","","Create a new hasher.",13],[10,"update","","Update the internal hasher with the bytes from ```buf```",13],[10,"checksum","","Return the computed hash.",13],[10,"reset","","Reset this hasher to its initial state.",13],[10,"new","","Create a new hasher.",14],[10,"update","","Update the internal hasher with the bytes from ```buf```",14],[10,"checksum","","Return the computed hash.",14],[10,"reset","","Reset this hasher to its initial state.",14],[0,"jpeg","image","Decoding and Encoding of JPEG Images"],[1,"JPEGDecoder","image::jpeg","The representation of a JPEG decoder"],[1,"JPEGEncoder","","The representation of a JPEG encoder"],[1,"Component","","A representation of a JPEG component"],[11,"id","","The Component's identifier",15],[11,"h","","Horizontal sampling factor",15],[11,"v","","Vertical sampling factor",15],[11,"tq","","The quantization table selector",15],[11,"dc_table","","Index to the Huffman DC Table",15],[11,"ac_table","","Index to the AC Huffman Table",15],[11,"dc_pred","","The dc prediction of the component",15],[10,"new","","Create a new encoder that writes its output to ```w```",16],[10,"encode","","Encodes the image ```image```\nthat has dimensions ```width``` and ```height```\nand ```ColorType``` ```c```\nThe Image in encoded with subsampling ratio 4:2:2",16],[10,"clone","","",15],[10,"new","","Create a new decoder that decodes from the stream ```r```",17],[10,"dimensions","","",17],[10,"colortype","","",17],[10,"row_len","","",17],[10,"read_scanline","","",17],[10,"read_image","","",17],[0,"gif","image","Decoding of GIF Images"],[1,"GIFDecoder","image::gif","The Representation of a GIF decoder"],[10,"new","","Create a new GIFDecoder from the Reader ```r```.\nThis function takes ownership of the Reader.",18],[10,"delay","","Returns the display delay in 100th's of a second for the currently\ndecoded image.",18],[10,"dimensions","","",18],[10,"colortype","","",18],[10,"row_len","","",18],[10,"read_scanline","","",18],[10,"read_image","","",18],[0,"lzw","","This modules provides an implementation of the Lempel–Ziv–Welch Compression Algorithm"],[1,"LZWReader","image::gif::lzw","An implementation of an LZW Decompressor."],[10,"new","","Create a new decompressor from a Reader",19],[10,"read","","",19],[0,"tiff","image","Decoding and Encoding of TIFF Images"],[1,"TIFFDecoder","image::tiff","The representation of a PNG decoder"],[2,"ByteOrder","","Byte order of the TIFF file."],[12,"LittleEndian","","little endian byte order",20],[12,"BigEndian","","big endian byte order",20],[10,"fmt","","",20],[10,"fmt","","",21],[10,"new","","Create a new decoder that decodes from the stream ```r```",21],[10,"init","","Initializes the decoder.",21],[10,"next_image","","Reads in the next image.\nIf there is no further image in the TIFF file a format error is return.\nTo determine whether there are more images call `TIFFDecoder::more_images` instead.",21],[10,"more_images","","Returns `true` if there is at least one more image available.",21],[10,"byte_order","","Returns the byte_order",21],[10,"read_short","","Reads a TIFF short value",21],[10,"read_long","","Reads a TIFF long value",21],[10,"read_offset","","Reads a TIFF IFA offset/value field",21],[10,"goto_offset","","Moves the cursor to the specified offset",21],[10,"dimensions","","",21],[10,"colortype","","",21],[10,"row_len","","",21],[10,"read_scanline","","",21],[10,"read_image","","",21],[0,"tga","image","Decoding of TGA Images"],[1,"TGADecoder","image::tga","The representation of a TGA decoder"],[10,"new","","Create a new decoder that decodes from the stream `r`",22],[10,"dimensions","","",22],[10,"colortype","","",22],[10,"row_len","","",22],[10,"read_scanline","","",22],[10,"read_image","","",22],[10,"eq","image","",1],[10,"ne","","",1],[10,"fmt","","",1],[10,"from_error","","",1],[10,"fmt","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"next","","",23],[10,"next","","",24],[10,"new","","Construct a new subimage",25],[10,"inner_mut","","Returns a mutable reference to the wrapped image.",25],[10,"change_bounds","","Change the coordinates of this subimage.",25],[10,"to_image","","Convert this subimage to an ImageBuffer",25],[10,"dimensions","","",25],[10,"bounds","","",25],[10,"get_pixel","","",25],[10,"put_pixel","","",25],[10,"blend_pixel","","",25],[10,"get_pixel_mut","","",25],[10,"to_rgb","","Returns a copy of this image as an RGB image.",4],[10,"to_rgba","","Returns a copy of this image as an RGBA image.",4],[10,"to_luma","","Returns a copy of this image as a Luma image.",4],[10,"to_luma_alpha","","Returns a copy of this image as a LumaA image.",4],[10,"crop","","Return a cut out of this image delimited by the bounding rectangle.",4],[10,"as_rgb8","","Return a reference to an 8bit RGB image",4],[10,"as_mut_rgb8","","Return a mutable reference to an 8bit RGB image",4],[10,"as_rgba8","","Return a reference to an 8bit RGBA image",4],[10,"as_mut_rgba8","","Return a mutable reference to an 8bit RGBA image",4],[10,"as_luma8","","Return a reference to an 8bit Grayscale image",4],[10,"as_mut_luma8","","Return a mutable reference to an 8bit Grayscale image",4],[10,"as_luma_alpha8","","Return a reference to an 8bit Grayscale image with an alpha channel",4],[10,"as_mut_luma_alpha8","","Return a mutable reference to an 8bit Grayscale image with an alpha channel",4],[10,"raw_pixels","","Return this image's pixels as a byte vector.",4],[10,"color","","Return this image's color type.",4],[10,"grayscale","","Return a grayscale version of this image.",4],[10,"invert","","Invert the colors of this image.\nThis method operates inplace.",4],[10,"resize","","Resize this image using the specified filter algorithm.\nReturns a new image. The image's aspect ratio is preserved.\n```nwidth``` and ```nheight``` are the new image's dimensions",4],[10,"resize_exact","","Resize this image using the specified filter algorithm.\nReturns a new image. Does not preserve aspect ratio.\n```nwidth``` and ```nheight``` are the new image's dimensions",4],[10,"blur","","Performs a Gaussian blur on this image.\n```sigma``` is a measure of how much to blur by.",4],[10,"unsharpen","","Performs an unsharpen mask on this image\n```sigma``` is the amount to blur the image by.\n```threshold``` is a control of how much to sharpen.\nsee https://en.wikipedia.org/wiki/Unsharp_masking#Digital_unsharp_masking",4],[10,"filter3x3","","Filters this image with the specified 3x3 kernel.",4],[10,"adjust_contrast","","Adjust the contrast of this image.\n```contrast``` is the amount to adjust the contrast by.\nNegative values decrease the contrast and positive values increase the contrast.",4],[10,"brighten","","Brighten the pixels of this image.\n```value``` is the amount to brighten each pixel by.\nNegative values decrease the brightness and positive values increase it.",4],[10,"flipv","","Flip this image vertically",4],[10,"fliph","","Flip this image horizontally",4],[10,"rotate90","","Rotate this image 90 degrees clockwise.",4],[10,"rotate180","","Rotate this image 180 degrees clockwise.",4],[10,"rotate270","","Rotate this image 270 degrees clockwise.",4],[10,"save","","Encode this image and write it to ```w```",4],[10,"dimensions","","",4],[10,"bounds","","",4],[10,"get_pixel","","",4],[10,"put_pixel","","",4],[10,"blend_pixel","","",4],[10,"get_pixel_mut","","",4],[10,"clone","","",0],[10,"fmt","","",0],[10,"eq","","",0],[10,"ne","","",0],[10,"fmt","","",26],[10,"clone","","",26],[10,"eq","","",26],[10,"ne","","",26],[10,"channel_count","","",26],[10,"color_model","","",26],[10,"channels","","",26],[10,"channels_mut","","",26],[10,"channels4","","",26],[10,"from_channels","","",26],[10,"from_slice","","",26],[10,"from_slice_mut","","",26],[10,"to_rgb","","",26],[10,"to_rgba","","",26],[10,"to_luma","","",26],[10,"to_luma_alpha","","",26],[10,"map","","",26],[10,"apply","","",26],[10,"map_with_alpha","","",26],[10,"apply_with_alpha","","",26],[10,"map2","","",26],[10,"apply2","","",26],[10,"invert","","",26],[10,"blend","","",26],[10,"index","","",26],[10,"index_mut","","",26],[10,"fmt","","",27],[10,"clone","","",27],[10,"eq","","",27],[10,"ne","","",27],[10,"channel_count","","",27],[10,"color_model","","",27],[10,"channels","","",27],[10,"channels_mut","","",27],[10,"channels4","","",27],[10,"from_channels","","",27],[10,"from_slice","","",27],[10,"from_slice_mut","","",27],[10,"to_rgb","","",27],[10,"to_rgba","","",27],[10,"to_luma","","",27],[10,"to_luma_alpha","","",27],[10,"map","","",27],[10,"apply","","",27],[10,"map_with_alpha","","",27],[10,"apply_with_alpha","","",27],[10,"map2","","",27],[10,"apply2","","",27],[10,"invert","","",27],[10,"blend","","",27],[10,"index","","",27],[10,"index_mut","","",27],[10,"fmt","","",28],[10,"clone","","",28],[10,"eq","","",28],[10,"ne","","",28],[10,"channel_count","","",28],[10,"color_model","","",28],[10,"channels","","",28],[10,"channels_mut","","",28],[10,"channels4","","",28],[10,"from_channels","","",28],[10,"from_slice","","",28],[10,"from_slice_mut","","",28],[10,"to_rgb","","",28],[10,"to_rgba","","",28],[10,"to_luma","","",28],[10,"to_luma_alpha","","",28],[10,"map","","",28],[10,"apply","","",28],[10,"map_with_alpha","","",28],[10,"apply_with_alpha","","",28],[10,"map2","","",28],[10,"apply2","","",28],[10,"invert","","",28],[10,"blend","","",28],[10,"index","","",28],[10,"index_mut","","",28],[10,"fmt","","",29],[10,"clone","","",29],[10,"eq","","",29],[10,"ne","","",29],[10,"channel_count","","",29],[10,"color_model","","",29],[10,"channels","","",29],[10,"channels_mut","","",29],[10,"channels4","","",29],[10,"from_channels","","",29],[10,"from_slice","","",29],[10,"from_slice_mut","","",29],[10,"to_rgb","","",29],[10,"to_rgba","","",29],[10,"to_luma","","",29],[10,"to_luma_alpha","","",29],[10,"map","","",29],[10,"apply","","",29],[10,"map_with_alpha","","",29],[10,"apply_with_alpha","","",29],[10,"map2","","",29],[10,"apply2","","",29],[10,"invert","","",29],[10,"blend","","",29],[10,"index","","",29],[10,"index_mut","","",29],[10,"from_color","","",27],[10,"from_color","","",27],[10,"from_color","","",27],[10,"from_color","","",29],[10,"from_color","","",29],[10,"from_color","","",29],[10,"from_color","","",28],[10,"from_color","","",28],[10,"from_color","","",28],[10,"from_color","","",26],[10,"from_color","","",26],[10,"from_color","","",26],[10,"blend","","",29],[10,"blend","","",27],[10,"blend","","",28],[10,"blend","","",26],[10,"invert","","",29],[10,"invert","","",27],[10,"invert","","",28],[10,"invert","","",26],[10,"as_mut_slice","collections::vec","",30],[10,"from_raw","image","Contructs a buffer from a generic container\n(for example a `Vec` or a slice)\nReturns None if the container is not big enough",31],[10,"into_raw","","Returns the underlying raw buffer",31],[10,"dimensions","","The width and height of this image.",31],[10,"width","","The width of this image.",31],[10,"height","","The height of this image.",31],[10,"as_slice","","The raw image data as a slice.",31],[10,"as_mut_slice","","The raw image data as a slice.",31],[10,"pixels","","Returns an iterator over the pixels of this image.",31],[10,"pixels_mut","","Returns an iterator over the mutable pixels of this image.\nThe iterator yields the coordinates of each pixel\nalong with a mutable reference to them.",31],[10,"enumerate_pixels","","Enumerates over the pixels of the image.\nThe iterator yields the coordinates of each pixel\nalong with a reference to them.",31],[10,"enumerate_pixels_mut","","Enumerates over the pixels of the image.",31],[10,"get_pixel","","Gets a reference to the pixel at location `(x, y)`",31],[10,"get_pixel_mut","","Gets a reference to the mutable pixel at location `(x, y)`",31],[10,"put_pixel","","Puts a pixel at location `(x, y)`",31],[10,"into_dynamic","","Casts the buffer into a dynamically typed image buffer",31],[10,"clone","","",31],[10,"dimensions","","",31],[10,"bounds","","",31],[10,"get_pixel","","",31],[10,"get_pixel_mut","","",31],[10,"put_pixel","","",31],[10,"blend_pixel","","Put a pixel at location (x, y), taking into account alpha channels",31],[10,"index","","",31],[10,"new","","Creates a new image buffer based on a `Vec<T>`.",31],[10,"from_fn","","Constructs a new ImageBuffer by repeated application of the supplied function.\nThe arguments to the function are the pixel's x and y coordinates.",31],[10,"from_vec","","Creates an image buffer out of an existing buffer.\nReturns None if the buffer is not big enough.",31],[10,"into_vec","","Consumes the image buffer and returns the underlying data\nas an owned buffer",31],[10,"convert","","",31],[4,"ImageResult","","Result of an image decoding/encoding process"],[4,"RgbImage","","Sendable Rgb image buffer"],[4,"RgbaImage","","Sendable Rgb + alpha channel image buffer"],[4,"GreyImage","","Sendable grayscale image buffer"],[4,"GreyAlphaImage","","Sendable grayscale + alpha channel image buffer"],[6,"Primitive","","Primitive trait from old stdlib, added max_value"],[9,"max_value","","The maximum value of primitive.",32],[6,"Pixel","","A generalized pixel."],[9,"channel_count","","Returns the number of channels of this pixel type.",33],[9,"channels","","Returns the components as a slice.",33],[9,"channels_mut","","Returns the components as a mutable slice",33],[9,"color_model","","Returns a string that can help to interprete the meaning each channel\nSee [gimp babl](http://gegl.org/babl/).",33],[9,"channels4","","Returns the channels of this pixel as a 4 tuple. If the pixel\nhas less than 4 channels the remainder is filled with the maximum value\nTODO deprecate",33],[9,"from_channels","","Construct a pixel from the 4 channels a, b, c and d.\nIf the pixel does not contain 4 channels the extra are ignored.\nTODO deprecate",33],[9,"from_slice","","Returns a view into a slice.",33],[9,"from_slice_mut","","Returns mutable view into a mutable slice.",33],[9,"to_rgb","","Convert this pixel to RGB",33],[9,"to_rgba","","Convert this pixel to RGB with an alpha channel",33],[9,"to_luma","","Convert this pixel to luma",33],[9,"to_luma_alpha","","Convert this pixel to luma with an alpha channel",33],[9,"map","","Apply the function ```f``` to each channel of this pixel.",33],[9,"apply","","Apply the function ```f``` to each channel of this pixel.",33],[9,"map_with_alpha","","Apply the function f to each channel except the alpha channel.\nApply the function g to the alpha channel.",33],[9,"apply_with_alpha","","Apply the function f to each channel except the alpha channel.\nApply the function g to the alpha channel. Works in-place.",33],[9,"map2","","Apply the function ```f``` to each channel of this pixel and\n```other``` pairwise.",33],[9,"apply2","","Apply the function ```f``` to each channel of this pixel and\n```other``` pairwise. Works in-place.",33],[9,"invert","","Invert this pixel",33],[9,"blend","","Blend the color of a given pixel into ourself, taking into account alpha channels",33],[6,"ImageDecoder","","The trait that all decoders implement"],[9,"dimensions","","Returns a tuple containing the width and height of the image",34],[9,"colortype","","Returns the color type of the image e.g RGB(8) (8bit RGB)",34],[9,"row_len","","Returns the length in bytes of one decoded row of the image",34],[9,"read_scanline","","Reads one row from the image into buf and returns the row index",34],[9,"read_image","","Decodes the entire image and return it as a Vector",34],[10,"load_rect","","Decodes a specific region of the image, represented by the rectangle\nstarting from ```x``` and ```y``` and having ```length``` and ```width```",34],[6,"GenericImage","","A trait for manipulating images."],[9,"dimensions","","The width and height of this image.",35],[9,"bounds","","The bounding rectangle of this image.",35],[9,"get_pixel","","Returns the pixel located at (x, y)",35],[9,"get_pixel_mut","","Puts a pixel at location (x, y)",35],[9,"put_pixel","","Put a pixel at location (x, y)",35],[9,"blend_pixel","","Put a pixel at location (x, y), taking into account alpha channels",35],[10,"pixels","","Returns an Iterator over the pixels of this image.\nThe iterator yields the coordinates of each pixel\nalong with their value",35],[10,"pixels_mut","","Returns an Iterator over mutable pixels of this image.\nThe iterator yields the coordinates of each pixel\nalong with a mutable reference to them.",35],[10,"load_rect","","Decodes a specific region of the image, represented by the rectangle\nstarting from ```x``` and ```y``` and having ```length``` and ```width```",34],[10,"pixels","","Returns an Iterator over the pixels of this image.\nThe iterator yields the coordinates of each pixel\nalong with their value",35],[10,"pixels_mut","","Returns an Iterator over mutable pixels of this image.\nThe iterator yields the coordinates of each pixel\nalong with a mutable reference to them.",35]],"paths":[[2,"ColorType"],[2,"ImageError"],[2,"ImageFormat"],[2,"FilterType"],[2,"DynamicImage"],[1,"WebpDecoder"],[1,"Frame"],[1,"VP8Decoder"],[1,"PPMEncoder"],[1,"PNGDecoder"],[1,"PNGEncoder"],[1,"ZlibDecoder"],[1,"Inflater"],[1,"Adler32"],[1,"Crc32"],[1,"Component"],[1,"JPEGEncoder"],[1,"JPEGDecoder"],[1,"GIFDecoder"],[1,"LZWReader"],[2,"ByteOrder"],[1,"TIFFDecoder"],[1,"TGADecoder"],[1,"Pixels"],[1,"MutPixels"],[1,"SubImage"],[1,"Rgb"],[1,"Luma"],[1,"Rgba"],[1,"LumaA"],[1,"Vec"],[1,"ImageBuffer"],[6,"Primitive"],[6,"Pixel"],[6,"ImageDecoder"],[6,"GenericImage"]]};
initSearch(searchIndex);