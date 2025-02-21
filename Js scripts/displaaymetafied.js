// Show collapsible row who has metafield value 

function hideEmptyMetafields() {
    console.log('Custom script running:::::::::::::');

    document.querySelectorAll(".product__accordion").forEach(function(accordion) {
        let content = accordion.querySelector(".accordion__content");

        if (content) {
          let metafield = content.querySelector(".metafield-multi_line_text_field");
            if (!metafield) {
                accordion.style.display = "none";
            }
        }
    });
}

hideEmptyMetafields();

// Observe changes in case content is loaded dynamically (AJAX, Shopify Sections, etc.)
const observer = new MutationObserver(hideEmptyMetafields);
observer.observe(document.body, { childList: true, subtree: true });


////////////////////////////////////////////////////
// Show collasible row if it has content 

function hideEmptyMetafields() {
    console.log('Custom script running:::::::::::::');

    document.querySelectorAll(".product__accordion").forEach(function(accordion) {
        let content = accordion.querySelector(".accordion__content");

        if (content) {
            let metafield = content.querySelector(".metafield-multi_line_text_field");

            // Check if content has any child tags (elements)
            let hasChildElements = [...content.children].some(child => child.tagName !== "SCRIPT" && child.tagName !== "STYLE");

            if (!metafield && !hasChildElements) {
                accordion.style.display = "none";
            }
        }
    });
}

hideEmptyMetafields();

// Observe changes in case content is loaded dynamically (AJAX, Shopify Sections, etc.)
const observerforempty = new MutationObserver(hideEmptyMetafields);
observer.observe(document.body, { childList: true, subtree: true });



// Grid layout /////////////////////////////////////////////

function gridlayout() {
    const gridItems = document.querySelectorAll(".product-grid .grid__item");
    const totalItems = gridItems.length;
    
    if (totalItems >= 5) {
        gridItems[2]?.classList.add("grid-class-1"); // 5th item (nth-child(5))
    }
    
    if (totalItems >= 10) {
        gridItems[5]?.classList.add("grid-class-2"); // 6th item (nth-child(6))
    }
    
    if (totalItems >= 15) {
        gridItems[12]?.classList.add("grid-class-3"); // 13th item (nth-child(13))
    }
    
}
gridlayout()
// console.log("Page loaded - Script is running");

// const productGrid = document.querySelector(".product-grid");
// const collectionContainer = document.querySelector("#ProductGridContainer");

// // Function to check and update class
// function updateProductGridClass() {
// if (document.querySelector(".active-facets__button-inner")) {
//   collectionContainer.classList.add("filtered"); // Add class when facet exists
//   console.log("Facet applied - Added 'filtered' class to product-grid");
// } else {
//   collectionContainer.classList.remove("filtered"); // Remove class when facet is gone
//   console.log("Facet removed - Removed 'filtered' class from product-grid");
// }
// }

// // Initial check on page load
// updateProductGridClass();

// // Observe DOM changes within .collection
// const observer = new MutationObserver(() => {
//     console.log("DOM change detected - Running updateProductGridClass()");
//     updateProductGridClass();
//     gridlayout();
// });

// if (collectionContainer) {
//     observer.observe(collectionContainer, { childList: true, subtree: true });
//     console.log("Observer initialized on .collection");
//     } else {
//     console.log("Error: .collection element not found!");
// }




const targetNode = document.querySelector(".product-grid-container");

if (targetNode) {
    const observer = new MutationObserver(() => {

        console.log('change detectded!!!!!!!!!!!!!!!!!')
        gridLayout();
    });

    observer.observe(targetNode, { childList: true, subtree: true });
} else {
    console.warn("Target #ProductGridContainer not found.");
}




