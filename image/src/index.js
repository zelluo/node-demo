// npm install imagemin imagemin-pngquant -D

const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

(async () => {
    const files = await imagemin(["images/*.{png|jpg}"], {
        destination: "compressed-images",
        plugins: [
            imageminPngquant({
                quality: [0.5, 0.6]
            })
        ]
    });
    console.log(files);
})();
