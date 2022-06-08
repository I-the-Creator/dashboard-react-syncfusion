import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

// to set the 'preview' pencil color
const changePickerPreviewColor = (args) => {
  let PickedColor = args.currentValue.hex;
  document.getElementById("preview").style.backgroundColor = PickedColor;
};

const changePalettePreviewColor = (args) => {
  let palettePickedColor = args.currentValue.hex;
  document.getElementById("preview").style.backgroundColor = palettePickedColor;
  document.getElementById("picked").textContent = palettePickedColor;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={changePalettePreviewColor} // to run changePreviewColor on change the palette color
            />
            <p className="text-2xl font-semibold mt-2 mb-4" id="picked"></p>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="color-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={changePickerPreviewColor} // to run changePreviewColor on change the picker color
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
