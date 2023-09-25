import React from "react";
import { render, act } from "@testing-library/react";
import { UBroadcast } from "./index"; // Update the path based on your folder structure
import "@testing-library/jest-dom/extend-expect";
jest.mock("@xmtp/react-sdk", () => ({
  Client: {
    create: jest.fn(),
  },
}));

describe("<UBroadcast />", () => {
  it("opens when window.ubroadcast.open() is called", () => {
    const { container } = render(<UBroadcast />);

    expect(container).toBeEmpty(); // Assuming the component returns null when closed

    act(() => {
      // Simulate the calling of the open method
      window.ubroadcast.open();
    });

    expect(container).not.toBeEmpty(); // Assuming the component renders content when open
  });

  it("closes when window.ubroadcast.close() is called", () => {
    const { container } = render(<UBroadcast />);

    act(() => {
      // Simulate the calling of the open method
      window.ubroadcast.open();
    });

    expect(container).not.toBeEmpty(); // Assuming the component renders content when open

    act(() => {
      // Simulate the calling of the close method
      window.ubroadcast.close();
    });

    expect(container).toBeEmpty(); // Assuming the component returns null when closed
  });
});
