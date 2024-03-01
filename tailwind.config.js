module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "OneAndHalfUnits": "24px",
        "TwoUnits": "32px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "FiveUnits": "80px",
        "Unit": "16px",
        "SixUnits": "96px",
        "FourUnits": "64px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius2": "2px",
        "Radius4": "4px",
        "Radius8": "8px"
      },
      "scale": {
        "XLarge": "192px",
        "Small": "48px",
        "XSmall": "16px",
        "XXLarge": "288px",
        "Large": "144px",
        "Medium": "96px",
        "MaxWidth": "1400px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}