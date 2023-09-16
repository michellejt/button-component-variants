import React from "react";
import Button from "./Button";

// Define a function component that renders the buttons
export default function Content() {
  // Use the return statement inside the function
  return (
    <>
      <div className="flex-1 p-10 text-2xl font-bold">
        <h1 className="text-gray-600">Buttons</h1>
        {/* Use grid-cols-2 for the first 6 buttons */}
        <div className="grid grid-cols-2 gap-4">
          <div class="justify-items-center">
            <pre>
              <code>
                {/* Use template literals to insert the props */}
                {`<Button />`}
              </code>
            </pre>
            <Button>Default</Button>
          </div>
          <div class="justify-items-center">
            <pre>
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus `}
              </code>
            </pre>
            <Button variant="default-hover">Default</Button>
          </div>
        </div>

        {/* Use grid-cols-3 for the 7th and 8th buttons */}
        <div className="grid grid-cols-3 gap-4">
          <div class="justify-items-center">
            <pre>
              <code>
                {/* Use template literals to insert the props */}
                {`<Button variant="outline"></Button>`}
              </code>
            </pre>
            <Button variant="outline">Default</Button>
          </div>
          <div class="justify-items-center">
            <pre>
              <code>
                {/* Use template literals to insert the props */}
                {`<Button variant="outline" />`}
              </code>
            </pre>
            <Button variant="outline">Outline</Button>
          </div>
          <div class="justify-items-center">
            <pre>
              <code>
                {/* Use template literals to insert the props */}
                {`<Button variant="outline" />`}
              </code>
            </pre>
            <Button variant="outline">Outline</Button>
          </div>
        </div>
        {/* Use grid-cols-4 for the rest of the buttons */}
        <div className="grid grid-cols-4 gap-4">
          <div class="justify-items-center">
            <Button />
            gf
          </div>
        </div>
      </div>
    </>
  );
}
