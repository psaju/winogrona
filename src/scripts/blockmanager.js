import { editor } from "./editor.js";

const blockManager = editor.BlockManager;
const categoryLabels = {
    basic: `<div class="c_heading">Basic</div><div class="c_desc">Bloki, grafiki etc.</div>`,
    layout: `<div class="c_heading">Układy</div><div class="c_desc">Dwu, trzykolumnowe etc.</div>`,
    forms: `<div class="c_heading">Formularze</div><div class="c_desc">inputy, przyciski etc</div>`,
    templates: '<div class="c_heading">Szablony</div><div class="c_desc">gotowe wzory</div>',
    extra: '<div class="c_heading">Extra</div><div class="c_desc">własny kod, zmienne</div>',
}

blockManager.add("big_label", {
    label: "Heading",
    content: '<h2>Heading</h2>',
    category: 'basic',
    attributes: {
      title: "Dodaj nagłówek h2",
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><path id="_x33_4.Heading" d="m456 89.333v333.333h33.333c9.205 0 16.667 7.462 16.667 16.667v33.333c0 9.205-7.462 16.667-16.667 16.667h-166.666c-9.205 0-16.667-7.462-16.667-16.667v-33.333c0-9.205 7.462-16.667 16.667-16.667h33.333v-133.333h-200v133.333h33.333c9.205 0 16.667 7.462 16.667 16.667v33.333c0 9.205-7.462 16.667-16.667 16.667h-166.666c-9.205 0-16.667-7.462-16.667-16.666v-33.333c0-9.205 7.462-16.667 16.667-16.667h33.333v-333.334h-33.333c-9.205 0-16.667-7.462-16.667-16.666v-33.334c0-9.205 7.462-16.667 16.667-16.667h166.667c9.205 0 16.667 7.462 16.667 16.667v33.333c0 9.205-7.462 16.667-16.667 16.667h-33.334v133.333h200v-133.333h-33.333c-9.205 0-16.667-7.462-16.667-16.667v-33.333c0-9.205 7.462-16.667 16.667-16.667h166.667c9.205 0 16.667 7.462 16.667 16.667v33.333c0 9.205-7.462 16.667-16.667 16.667z"/></svg>'
  });

  blockManager.add("link", {
    label: "Link",
    content: '<a>Link</a>',
    category: 'basic',
    attributes: {
      title: "Wstaw link",
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512.092 512.092" style="enable-background:new 0 0 512.092 512.092;" xml:space="preserve"><g><g><path d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z"/></g></g><g><g><path d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
  });
  
  blockManager.add("paragraph", {
    label: "Tekst",
    category: 'basic',
    content: `<p>Lorem ipsum</p>`,
    attributes: {
      title: 'Dodaj tekst'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><path d="m15 114.235c8.284 0 15-6.716 15-15v-69.235h69.235c8.284 0 15-6.716 15-15s-6.716-15-15-15h-84.235c-8.284 0-15 6.716-15 15v84.235c0 8.285 6.716 15 15 15z"/><path d="m497 0h-84.235c-8.284 0-15 6.716-15 15s6.716 15 15 15h69.235v69.235c0 8.284 6.716 15 15 15s15-6.716 15-15v-84.235c0-8.284-6.716-15-15-15z"/><path d="m497 397.765c-8.284 0-15 6.716-15 15v69.235h-69.235c-8.284 0-15 6.716-15 15s6.716 15 15 15h84.235c8.284 0 15-6.716 15-15v-84.235c0-8.285-6.716-15-15-15z"/><path d="m99.235 482h-69.235v-69.235c0-8.284-6.716-15-15-15s-15 6.716-15 15v84.235c0 8.284 6.716 15 15 15h84.235c8.284 0 15-6.716 15-15s-6.715-15-15-15z"/><path d="m419.66 191.38v-94.73c0-4.7-3.81-8.51-8.52-8.51h-155.14-155.14c-4.71 0-8.52 3.81-8.52 8.51v94.73c0 4.71 3.81 8.52 8.52 8.52h45.24c4.7 0 8.51-3.81 8.51-8.52v-32.45c0-4.71 3.82-8.52 8.52-8.52h53.21c4.71 0 8.52 3.81 8.52 8.52v234.14c0 4.71-3.81 8.52-8.52 8.52h-23.27c-4.71 0-8.52 3.81-8.52 8.52v45.24c0 4.7 3.81 8.51 8.52 8.51h62.93 62.93c4.71 0 8.52-3.81 8.52-8.51v-45.24c0-4.71-3.81-8.52-8.52-8.52h-23.27c-4.71 0-8.52-3.81-8.52-8.52v-234.14c0-4.71 3.81-8.52 8.52-8.52h53.21c4.7 0 8.52 3.81 8.52 8.52v32.45c0 4.71 3.81 8.52 8.51 8.52h45.24c4.71 0 8.52-3.81 8.52-8.52z"/></g></svg>'
  });
  
  blockManager.add("block", {
    label: "Blok",
    category: 'basic',
    content: {
      type: "div-block",
    },
    droppable: true,
    attributes: {
      title: 'Dodaj element blokowy'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M432,0H80C35.888,0,0,35.888,0,80v352c0,44.112,35.888,80,80,80h352c44.112,0,80-35.888,80-80V80 C512,35.888,476.112,0,432,0z M472,432c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h352 c22.056,0,40,17.944,40,40V432z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
  });
  
  blockManager.add("image", {
    label: "Grafika",
    category: "basic",
    content: { 
        type: "image" 
    },
    activate: true,
    droppable: true,
    attributes: {
      title: 'Wstaw grafikę'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="550.801px" height="550.8px" viewBox="0 0 550.801 550.8" style="enable-background:new 0 0 550.801 550.8;" xml:space="preserve"><g><path d="M515.828,61.201H34.972C15.659,61.201,0,76.859,0,96.172v358.458C0,473.942,15.659,489.6,34.972,489.6h480.856 c19.314,0,34.973-15.658,34.973-34.971V96.172C550.801,76.859,535.143,61.201,515.828,61.201z M515.828,96.172V350.51l-68.92-62.66 c-10.359-9.416-26.289-9.04-36.186,0.866l-69.752,69.741L203.438,194.179c-10.396-12.415-29.438-12.537-39.99-0.271L34.972,343.219 V96.172H515.828z M367.201,187.972c0-26.561,21.523-48.086,48.084-48.086c26.562,0,48.086,21.525,48.086,48.086 c0,26.561-21.523,48.085-48.086,48.085C388.725,236.058,367.201,214.533,367.201,187.972z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
  });
  
  blockManager.add("popup-wrapper", {
    id: "popup-wrapper",
    category: "layout",
    label: "Pusty",
    content: {
      type: "popup-wrapper"
    },
    droppable: true,
    attributes: {
      name: 'popup',
      title: 'Wstaw pusty popup'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 61.382 61.382" style="enable-background:new 0 0 61.382 61.382;" xml:space="preserve"><g><g id="group-41svg"><path id="path-1_33_" d="M51.455,61.212h-2.428c-0.829,0-1.5-0.673-1.5-1.501c0-0.83,0.671-1.501,1.5-1.501h2.428 c0.704,0,1.395-0.112,2.054-0.331c0.785-0.262,1.635,0.163,1.896,0.95c0.262,0.787-0.163,1.637-0.949,1.899 C53.491,61.048,52.482,61.212,51.455,61.212z M44.026,61.212h-5c-0.828,0-1.5-0.673-1.5-1.501c0-0.83,0.672-1.501,1.5-1.501h5 c0.829,0,1.5,0.671,1.5,1.501C45.526,60.539,44.855,61.212,44.026,61.212z M34.027,61.212h-5c-0.829,0-1.5-0.673-1.5-1.501 c0-0.83,0.671-1.501,1.5-1.501h5c0.828,0,1.499,0.671,1.499,1.501C35.526,60.539,34.855,61.212,34.027,61.212z M24.026,61.212h-5 c-0.828,0-1.5-0.673-1.5-1.501c0-0.83,0.672-1.501,1.5-1.501h5c0.829,0,1.5,0.671,1.5,1.501 C25.526,60.539,24.855,61.212,24.026,61.212z M14.027,61.212H9.455c-0.17,0-0.338-0.005-0.507-0.013 c-0.827-0.044-1.463-0.75-1.42-1.578c0.043-0.828,0.739-1.467,1.577-1.421c0.116,0.007,0.233,0.01,0.35,0.01h4.572 c0.828,0,1.499,0.671,1.499,1.501C15.526,60.539,14.855,61.212,14.027,61.212z M4.435,59.439c-0.331,0-0.664-0.108-0.942-0.332 c-1.564-1.264-2.672-2.954-3.201-4.888c-0.22-0.799,0.251-1.625,1.05-1.844c0.798-0.219,1.624,0.251,1.843,1.051 c0.362,1.322,1.121,2.478,2.193,3.345c0.645,0.52,0.745,1.465,0.225,2.11C5.307,59.249,4.872,59.439,4.435,59.439z M57.944,57.889 c-0.305,0-0.612-0.093-0.877-0.284c-0.672-0.486-0.824-1.424-0.338-2.096c0.802-1.112,1.226-2.428,1.226-3.804 c0-0.829,0.672-1.501,1.5-1.501c0.828,0,1.5,0.672,1.5,1.501c0,2.011-0.62,3.934-1.795,5.562 C58.867,57.673,58.408,57.889,57.944,57.889z M1.882,50.346c-0.828,0-1.5-0.672-1.5-1.501v-5.003c0-0.83,0.672-1.502,1.5-1.502 s1.5,0.672,1.5,1.502v5.003C3.382,49.674,2.71,50.346,1.882,50.346z M59.882,49.919c-0.828,0-1.5-0.672-1.5-1.501v-5.004 c0-0.828,0.672-1.501,1.5-1.501s1.5,0.673,1.5,1.501v5.004C61.382,49.247,60.71,49.919,59.882,49.919z M1.882,40.339 c-0.828,0-1.5-0.672-1.5-1.501v-5.004c0-0.829,0.672-1.501,1.5-1.501s1.5,0.672,1.5,1.501v5.004 C3.382,39.667,2.71,40.339,1.882,40.339z M59.882,39.912c-0.828,0-1.5-0.672-1.5-1.501v-5.004c0-0.828,0.672-1.501,1.5-1.501 s1.5,0.673,1.5,1.501v5.004C61.382,39.24,60.71,39.912,59.882,39.912z M1.882,30.332c-0.828,0-1.5-0.672-1.5-1.501v-5.004 c0-0.829,0.672-1.501,1.5-1.501s1.5,0.672,1.5,1.501v5.004C3.382,29.66,2.71,30.332,1.882,30.332z M59.882,29.905 c-0.828,0-1.5-0.672-1.5-1.501V23.4c0-0.828,0.672-1.501,1.5-1.501s1.5,0.673,1.5,1.501v5.004 C61.382,29.233,60.71,29.905,59.882,29.905z M1.882,20.325c-0.828,0-1.5-0.672-1.5-1.501V13.82c0-0.829,0.672-1.501,1.5-1.501 s1.5,0.672,1.5,1.501v5.004C3.382,19.653,2.71,20.325,1.882,20.325z M59.882,19.898c-0.828,0-1.5-0.672-1.5-1.501v-5.004 c0-0.829,0.672-1.501,1.5-1.501s1.5,0.672,1.5,1.501v5.004C61.382,19.226,60.71,19.898,59.882,19.898z M1.502,10.32 c-0.053,0-0.106-0.003-0.16-0.009C0.518,10.223-0.079,9.484,0.009,8.66c0.212-1.995,1.034-3.841,2.378-5.338 c0.554-0.617,1.502-0.668,2.118-0.114c0.617,0.554,0.668,1.503,0.114,2.12c-0.92,1.025-1.482,2.287-1.628,3.649 C2.91,9.748,2.259,10.32,1.502,10.32z M59.351,9.897c-0.724,0-1.361-0.525-1.48-1.264c-0.217-1.352-0.845-2.582-1.819-3.557 c-0.586-0.586-0.586-1.536,0-2.122c0.586-0.586,1.535-0.587,2.121,0c1.423,1.424,2.343,3.223,2.661,5.204 c0.131,0.818-0.426,1.589-1.243,1.72C59.51,9.891,59.43,9.897,59.351,9.897z M7.754,3.352c-0.691,0-1.313-0.48-1.465-1.184 c-0.176-0.81,0.339-1.609,1.149-1.784c0.659-0.143,1.338-0.215,2.017-0.215h3.287c0.828,0,1.5,0.671,1.5,1.501 c0,0.828-0.672,1.501-1.5,1.501H9.455c-0.467,0-0.932,0.05-1.383,0.147C7.965,3.341,7.859,3.352,7.754,3.352z M52.737,3.273 c-0.079,0-0.159-0.007-0.24-0.019c-0.342-0.056-0.692-0.083-1.042-0.083h-3.713c-0.828,0-1.5-0.673-1.5-1.501 c0-0.83,0.672-1.501,1.5-1.501h3.713c0.508,0,1.019,0.04,1.519,0.121c0.817,0.131,1.374,0.901,1.243,1.72 C54.098,2.747,53.461,3.273,52.737,3.273z M42.742,3.171h-5c-0.828,0-1.5-0.673-1.5-1.501c0-0.83,0.672-1.501,1.5-1.501h5 c0.828,0,1.5,0.671,1.5,1.501C44.242,2.498,43.57,3.171,42.742,3.171z M32.742,3.171h-5c-0.828,0-1.5-0.673-1.5-1.501 c0-0.83,0.672-1.501,1.5-1.501h5c0.828,0,1.5,0.671,1.5,1.501C34.242,2.498,33.57,3.171,32.742,3.171z M22.742,3.171h-5 c-0.828,0-1.5-0.673-1.5-1.501c0-0.83,0.672-1.501,1.5-1.501h5c0.828,0,1.5,0.671,1.5,1.501 C24.242,2.498,23.57,3.171,22.742,3.171z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
  });

  blockManager.add("popup-wrapper-sub", {
    id: "popup-wrapper-sub",
    category: "layout",
    label: "Sub",
    content: {
      type: "popup-wrapper-sub"
    },
    droppable: true,
    media: '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M650 5105 c-337 -68 -587 -329 -639 -665 -9 -56 -11 -550 -9 -1925 3 -2021 -1 -1859 58 -2017 66 -177 261 -372 438 -438 157 -59 2 -55 2062 -55 2060 0 1905 -4 2062 55 178 66 372 260 438 438 59 157 55 2 55 2062 0 1729 -1 1890 -17 1945 -29 106 -58 172 -107 247 -114 174 -261 279 -481 346 -50 16 -208 17 -1925 19 -1515 1 -1882 -1 -1935 -12z m3842 -427 c91 -45 147 -103 191 -196 l32 -67 0 -1855 0 -1855 -32 -67 c-44 -93 -100 -151 -191 -196 l-76 -37 -1855 0 -1856 0 -67 32 c-93 44 -151 100 -196 191 l-37 76 0 1855 0 1856 32 67 c17 37 50 87 72 111 44 48 135 101 197 116 23 5 789 8 1875 8 l1835 -2 76 -37z"/><path d="M1095 4513 c-101 -22 -137 -102 -74 -165 30 -30 31 -31 106 -24 42 3 130 6 195 6 119 0 120 0 149 29 21 22 29 39 29 66 0 27 -8 44 -29 66 l-29 29 -164 -1 c-90 -1 -172 -3 -183 -6z"/><path d="M1679 4505 c-54 -30 -61 -104 -14 -151 24 -24 27 -24 214 -24 118 0 199 4 214 11 57 26 67 108 17 152 l-30 27 -188 0 c-142 -1 -193 -4 -213 -15z"/><path d="M2310 4493 c-50 -44 -40 -126 17 -152 15 -7 96 -11 214 -11 187 0 190 0 214 24 32 32 40 69 25 107 -22 53 -49 59 -254 59 l-186 0 -30 -27z"/><path d="M2949 4491 c-21 -22 -29 -39 -29 -66 0 -27 8 -44 29 -66 l29 -29 197 0 197 0 29 29 c21 22 29 39 29 66 0 27 -8 44 -29 66 l-29 29 -197 0 -197 0 -29 -29z"/><path d="M3589 4491 c-37 -38 -39 -88 -5 -128 l24 -28 194 -6 c151 -5 199 -3 220 8 80 39 57 159 -33 177 -18 3 -108 6 -201 6 l-170 0 -29 -29z"/><path d="M4209 4355 c-32 -17 -54 -66 -45 -101 4 -15 24 -47 45 -73 49 -58 78 -116 92 -182 15 -67 45 -99 96 -99 47 0 76 19 93 60 28 66 -51 259 -145 358 -55 56 -85 65 -136 37z"/><path d="M733 4305 c-74 -78 -143 -240 -143 -338 0 -81 95 -127 155 -74 19 16 30 40 40 88 15 73 50 149 89 196 49 58 42 129 -15 158 -50 26 -78 19 -126 -30z"/><path d="M4391 3756 c-45 -25 -50 -49 -51 -243 0 -116 4 -191 11 -207 18 -38 72 -60 114 -46 61 20 65 37 65 250 0 112 -4 199 -10 211 -12 22 -61 49 -87 49 -10 -1 -29 -7 -42 -14z"/><path d="M659 3725 c-41 -22 -49 -62 -49 -247 0 -216 14 -248 105 -248 48 0 81 34 90 92 4 25 5 116 3 202 l-3 158 -33 29 c-36 32 -72 37 -113 14z"/><path d="M4366 3089 c-26 -31 -26 -31 -26 -220 0 -112 4 -198 10 -210 29 -53 121 -61 160 -12 19 24 20 39 20 219 l0 192 -26 31 c-21 26 -33 31 -69 31 -36 0 -48 -5 -69 -31z"/><path d="M675 3091 c-11 -5 -29 -19 -40 -31 -19 -21 -20 -36 -20 -221 0 -198 0 -199 25 -224 55 -55 139 -33 159 42 14 48 14 316 1 364 -6 20 -18 43 -28 52 -23 21 -70 29 -97 18z"/><path d="M4369 2451 l-29 -29 0 -197 0 -197 29 -29 c22 -21 39 -29 66 -29 27 0 44 8 66 29 l29 29 0 197 0 197 -29 29 c-22 21 -39 29 -66 29 -27 0 -44 -8 -66 -29z"/><path d="M657 2439 c-40 -23 -47 -60 -47 -239 0 -188 9 -227 56 -249 40 -18 72 -13 106 18 l33 29 3 158 c5 189 -2 239 -33 270 -26 26 -85 32 -118 13z"/><path d="M4387 1824 c-15 -8 -32 -26 -37 -40 -6 -14 -10 -108 -10 -209 l0 -185 28 -30 c43 -50 125 -40 151 17 14 31 15 387 1 414 -12 22 -61 49 -87 49 -10 -1 -31 -8 -46 -16z"/><path d="M654 1792 c-40 -32 -44 -54 -44 -237 0 -186 7 -222 49 -245 36 -19 86 -12 114 16 34 34 40 76 35 268 l-3 158 -33 29 c-37 34 -85 38 -118 11z"/><path d="M4384 1303 c-43 -8 -65 -46 -75 -130 -7 -59 -19 -98 -49 -158 -46 -93 -50 -132 -16 -172 32 -37 93 -39 130 -4 35 33 91 144 110 217 18 71 21 176 5 206 -9 16 -71 52 -81 47 -2 -1 -13 -4 -24 -6z"/><path d="M638 1141 c-27 -24 -33 -36 -32 -70 3 -93 138 -302 226 -347 39 -20 81 -10 113 28 41 48 34 79 -36 154 -53 57 -119 168 -119 201 0 21 -61 63 -91 63 -18 0 -41 -11 -61 -29z"/><path d="M4010 808 c-14 -6 -92 -13 -173 -17 -141 -6 -150 -7 -168 -30 -27 -33 -33 -67 -19 -102 21 -49 54 -59 190 -59 212 0 310 37 310 117 0 45 -14 69 -50 88 -33 17 -55 18 -90 3z"/><path d="M1105 766 c-32 -32 -40 -69 -25 -107 22 -53 49 -59 254 -59 l186 0 30 28 c50 43 40 125 -17 151 -15 7 -96 11 -214 11 -187 0 -190 0 -214 -24z"/><path d="M1764 778 c-55 -26 -62 -108 -14 -150 l30 -28 186 0 c205 0 232 6 254 59 15 38 7 75 -25 107 -24 24 -26 24 -217 23 -111 0 -202 -5 -214 -11z"/><path d="M2389 761 c-21 -22 -29 -39 -29 -66 0 -27 8 -44 29 -66 l29 -29 197 0 197 0 29 29 c21 22 29 39 29 66 0 27 -8 44 -29 66 l-29 29 -197 0 -197 0 -29 -29z"/><path d="M3029 761 c-21 -22 -29 -39 -29 -66 0 -27 8 -44 29 -66 l29 -29 197 0 197 0 29 29 c21 22 29 39 29 66 0 27 -8 44 -29 66 l-29 29 -197 0 -197 0 -29 -29z"/></g></svg>'
  });

  blockManager.add("columns-2", {
    id: "columns-2",
    category: "layout",
    label: "2 Kolumny",
    content: `<div  id="ihye" style="box-sizing: border-box; max-width: 757px; width: calc(100% - 20px); position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); min-height: 50px; overflow: hidden;"><div style="box-sizing: border-box;"></div><div class="popup-wrapper-sub" id="ijha" style="box-sizing: border-box; display: flex; flex-wrap: wrap; width: 100%; height: 100%; min-height: 50px;"><div style="box-sizing: border-box;"></div><div id="i1mi" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 50%;"><div style="box-sizing: border-box;"></div></div><div id="i3ad" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 50%;"><div style="box-sizing: border-box;"></div></div></div></div>`,
    droppable: true,
    attributes: {
      name: 'popup'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m22.5 24h-21c-.827 0-1.5-.673-1.5-1.5v-21c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5zm-21-23c-.276 0-.5.224-.5.5v21c0 .276.224.5.5.5h21c.276 0 .5-.224.5-.5v-21c0-.276-.224-.5-.5-.5z"/><path d="m12 24c-.276 0-.5-.224-.5-.5v-23c0-.276.224-.5.5-.5s.5.224.5.5v23c0 .276-.224.5-.5.5z"/></svg>'
  });

  blockManager.add("rows-2", {
    id: "rows-2",
    category: "layout",
    label: "2 Rzędy",
    content: `<div  id="ihye" style="box-sizing: border-box; max-width: 757px; width: calc(100% - 20px); position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); min-height: 50px; overflow: hidden;"><div style="box-sizing: border-box;"></div><div class="popup-wrapper-sub" id="ijha" style="box-sizing: border-box; display: flex; flex-wrap: wrap; width: 100%; height: 100%; min-height: 50px;"><div style="box-sizing: border-box;"></div><div id="i1mi" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 100%;"><div style="box-sizing: border-box;"></div></div><div id="i3ad" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 100%;"><div style="box-sizing: border-box;"></div></div></div></div>`,
    droppable: true,
    attributes: {
      name: 'popup'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m22.5 24h-21c-.827 0-1.5-.673-1.5-1.5v-21c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5zm-21-23c-.276 0-.5.224-.5.5v21c0 .276.224.5.5.5h21c.276 0 .5-.224.5-.5v-21c0-.276-.224-.5-.5-.5z"/><path d="m23.5 12.5h-23c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5z"/></svg>'
  });

  blockManager.add("columns-2-1", {
    id: "columns-2-1",
    category: "layout",
    label: "2 Kolumny 2/1",
    content: `<div  id="ihye" style="box-sizing: border-box; max-width: 757px; width: calc(100% - 20px); position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); min-height: 50px; overflow: hidden;"><div style="box-sizing: border-box;"></div><div class="popup-wrapper-sub" id="ijha" style="box-sizing: border-box; display: flex; flex-wrap: wrap; width: 100%; height: 100%; min-height: 50px;"><div style="box-sizing: border-box;"></div><div id="i1mi" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 66%;"><div style="box-sizing: border-box;"></div></div><div id="i3ad" style="box-sizing: border-box; min-height: 50px; display: block; padding: 1rem; width: 34%;"><div style="box-sizing: border-box;"></div></div></div></div>`,
    droppable: true,
    attributes: {
      name: 'popup'
    },
    media: '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m22.5 24h-21c-.827 0-1.5-.673-1.5-1.5v-21c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5zm-21-23c-.275 0-.5.224-.5.5v21c0 .276.225.5.5.5h21c.275 0 .5-.224.5-.5v-21c0-.276-.225-.5-.5-.5z"/><path d="m7.5 24c-.276 0-.5-.224-.5-.5v-23c0-.276.224-.5.5-.5s.5.224.5.5v23c0 .276-.224.5-.5.5z"/></svg>'
  });
  
  blockManager.add("close-button", {
    id: "close-button-1",
    category: "basic",
    label: "Przycisk zamknięcia",
    content: {
      type: "close-button",
    },
    droppable: true,
    media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M383.28,340.858l-42.422,42.422 L256,298.422l-84.858,84.858l-42.422-42.422L213.578,256l-84.858-84.858l42.422-42.422L256,213.578l84.858-84.858l42.422,42.422 L298.422,256L383.28,340.858z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
  });

  blockManager.add("template-1", {
    id: "template-1",
    category: "templates",
    label: "Szablon 1",
    content: {
      type: "template-1",
    },
    media: '<img src="../src/assets/block/template-1.jpg"/>',
    droppable: true,
  });

  blockManager.add("code", {
    id: "code",
    category: "extra",
    label: "Własny kod",
    content: {
      type: "custom-code",
    },
    droppable: true,
    media: '<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><g><path d="m497 0h-482c-8.284 0-15 6.716-15 15v482c0 8.284 6.716 15 15 15h482c8.284 0 15-6.716 15-15v-482c0-8.284-6.716-15-15-15zm-15 61h-30v-31h30zm-150 0v-31h30v31zm60-31h30v31h-30zm-90 0v31h-272v-31zm-272 452v-391h452v391z"/><path d="m176.023 215.443c-5.857-5.858-15.355-5.858-21.213 0l-59.7 59.7c-5.858 5.858-5.858 15.355 0 21.213l59.7 59.7c5.857 5.858 15.355 5.859 21.213 0 5.858-5.858 5.858-15.355 0-21.213l-49.093-49.093 49.094-49.094c5.858-5.858 5.858-15.355-.001-21.213z"/><path d="m357.189 215.443c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l49.094 49.094-49.094 49.094c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.858 15.355 5.859 21.213 0l59.7-59.7c5.858-5.858 5.858-15.355 0-21.213z"/><path d="m293.039 212.607c-7.427-3.676-16.422-.637-20.099 6.787l-59.096 119.351c-3.676 7.424-.638 16.422 6.786 20.098 7.4 3.663 16.409.664 20.099-6.787l59.096-119.351c3.676-7.423.638-16.422-6.786-20.098z"/></g></svg>'
  });

  blockManager.add("template-2", {
    id: "template-2",
    category: "templates",
    label: "Szablon 2",
    content: {
      type: "template-2",
    },
    media: '<img src="../src/assets/block/template-2.jpg"/>',
    droppable: true,
  });

  blockManager.add("template-3", {
    id: "template-3",
    category: "templates",
    label: "Szablon 3",
    content: {
      type: "template-3",
    },
    media: '<img src="../src/assets/block/template-3.jpg"/>',
    droppable: true,
  });



  // Stylowane komponenty

  blockManager.add("close-button-2", {
    id: "close-button-2",
    category: "styled",
    label: "Przycisk zamknięcia czerwony",
    content: [
      {type: "close-button",},
      '<span name="popup-close" style="inset:10px,auto,auto,10px;background:#f00;position:absolute;"></span>'
    ],
    droppable: true,
    render: ({ model, el }) => {
      el.addEventListener('click', () => {
        editor.getSelected().view.model = model;
        editor.Modal.close();
      })
     },
    media: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M383.28,340.858l-42.422,42.422 L256,298.422l-84.858,84.858l-42.422-42.422L213.578,256l-84.858-84.858l42.422-42.422L256,213.578l84.858-84.858l42.422,42.422 L298.422,256L383.28,340.858z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
  });


  editor.onReady(() => {

    const blocks = blockManager.getAll();

    const templates = blocks.filter(block => block.get('category').attributes.id == 'templates');
    const filteredBlocks = blocks.filter(block => block.get('category').attributes.id != 'templates' && block.get('category').attributes.id != 'styled');

    const templatesEl = blockManager.render(templates, { external: true });
    const blocksEl = blockManager.render(filteredBlocks, { external: true });

    document.getElementById('templates').appendChild(templatesEl);
    document.getElementById('blockmanager').appendChild(blocksEl);

    document.querySelectorAll('.gjs-block-category').forEach((c, index) => {
      c.setAttribute('tabindex', '0');
      c.classList.add('collapse', 'collapse-arrow', 'group');
      c.insertAdjacentHTML('afterbegin', '<input type="checkbox" class="peer"/>');
      c.querySelector('.gjs-title').classList.add('collapse-title', 'peer-checked:bg-white');
      c.querySelector('.gjs-title').classList.remove('gjs-title');
      c.querySelector('.gjs-blocks-c').removeAttribute('style');
      c.querySelector('.gjs-blocks-c').classList.add('collapse-content', 'peer-checked:bg-white');
      c.querySelector('.gjs-blocks-c').classList.remove('gjs-blocks-c');
      c.querySelector('i').remove();
    });
    
    blockManager.getCategories().each((ctg) => {
        ctg.view.el.querySelector('.collapse-title').innerHTML = categoryLabels[ctg.attributes.id];
    });

    document.getElementById('blocks-temp').remove()
  })