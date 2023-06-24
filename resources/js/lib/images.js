/**
 * Image handling function,
 * Dynamically render images on the DOM
 *
 * Wearable Art
 */
function prependImage(src) {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Create a new link element
    var newLink = document.createElement("a");
    newLink.href = src;
    newLink.dataset.lightbox = "gallery";

    // Create a new image element
    var newImg = document.createElement("img");
    newImg.srcset = src + " 480w, " + src + " 800w";
    newImg.sizes = "(max-width: 600px) 480px, 800px";
    newImg.src = src;
    newImg.alt = "";

    // Append new image and link to div
    newLink.appendChild(newImg);
    newDiv.appendChild(newLink);

    // Find the gallery container
   var gallery = document.querySelector(".wearable");

    // Insert the new div at the beginning of the gallery
    gallery.insertBefore(newDiv, gallery.firstChild);
}

/**
 * Image handling function,
 * Dynamically render images on the DOM
 *
 * Artistic Creations
 */
function prependArt(src) {
    // Create a new div element
    var newDiv = document.createElement("div");

    // Create a new link element
    var newLink = document.createElement("a");
    newLink.href = src;
    newLink.dataset.lightbox = "gallery";

    // Create a new image element
    var newImg = document.createElement("img");
    newImg.srcset = src + " 480w, " + src + " 800w";
    newImg.sizes = "(max-width: 600px) 480px, 800px";
    newImg.src = src;
    newImg.alt = "";

    // Append new image and link to div
    newLink.appendChild(newImg);
    newDiv.appendChild(newLink);

    // Find the gallery container
   var gallery = document.querySelector(".art");

    // Insert the new div at the beginning of the gallery
    gallery.insertBefore(newDiv, gallery.firstChild);
}