import React from "react";
import Button from "./Button";

// Define a function component that renders the buttons
export default function Content() {
  // Use the return statement inside the function
  return (
    <>
      <div className="flex-1 p-10 font-bold">
        <h1 className="text-gray-2 text-2xl">Buttons</h1>
        {/* Use grid-cols-2 for the first 6 buttons */}
        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button />`}
              </code>
            </pre>
            <Button>Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus `}
              </code>
            </pre>
            <Button variant="default-hover">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {` <Button variant="outline" />`}
              </code>
            </pre>
            <Button variant="outline">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus `}
              </code>
            </pre>
            <Button variant="outline-hover">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center pb-5">
            <pre className="text-xs text-gray-1 mb-1.5">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button variant="text" />`}
              </code>
            </pre>
            <Button variant="text">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus `}
              </code>
            </pre>
            <Button variant="text-hover">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button />`}
              </code>
            </pre>
            <Button variant="disableShadow">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button variant="disabled/>`}
              </code>
            </pre>
            <Button variant="disabled">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button variant="text-disabled/>`}
              </code>
            </pre>
            <Button variant="text-disabled">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button startIcon=""/>`}
              </code>
            </pre>
            <Button startIcon="disableShadow">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button endIcon=""/>`}
              </code>
            </pre>
            <Button endIcon="disableShadow">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button size="sm"/>`}
              </code>
            </pre>
            <Button size="sm">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button size="med"/>`}
              </code>
            </pre>
            <Button size="med">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button size="lg"/>`}
              </code>
            </pre>
            <Button size="lg">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4  pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button color="default" />`}
              </code>
            </pre>
            <Button color="default">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button color="primary" />`}
              </code>
            </pre>
            <Button color="primary">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button color="secondary" />`}
              </code>
            </pre>
            <Button color="secondary">Default</Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`<Button color="danger" />`}
              </code>
            </pre>
            <Button color="danger">Default</Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 pt-4">
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus`}
              </code>
            </pre>
            <Button color="default" state="hover">
              Default
            </Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus`}
              </code>
            </pre>
            <Button color="primary" state="hover">
              Default
            </Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus`}
              </code>
            </pre>
            <Button color="secondary" state="hover">
              Default
            </Button>
          </div>
          <div className="justify-items-center">
            <pre className="text-xs text-gray-1">
              <code>
                {/* Use template literals to insert the props */}
                {`&:hover, &:focus`}
              </code>
            </pre>
            <Button color="danger" state="hover">
              Default
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
