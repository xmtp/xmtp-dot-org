import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { USubscribe } from "./index";
import "@testing-library/jest-dom/extend-expect";
import { Client } from "@xmtp/react-sdk";

jest.mock("@xmtp/react-sdk", () => ({
  Client: {
    create: jest.fn(),
  },
}));

describe("<USubscribe />", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<USubscribe />);
    expect(getByText("Subscribe with your wallet")).toBeInTheDocument();
  });

  it("shows loading state on click", async () => {
    Client.create.mockResolvedValue({ address: "0xTestAddress" });
    const { getByText } = render(<USubscribe />);
    fireEvent.click(getByText("Subscribe with your wallet"));

    await act(() => {
      expect(
        getByText("Subscribe with your wallet").closest("div")
      ).toHaveClass("loading");
    });
  });
});
