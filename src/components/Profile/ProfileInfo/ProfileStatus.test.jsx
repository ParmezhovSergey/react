import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
  test("status from state!)", () => {
    const component = create(<ProfileStatus status="it-kamasutra" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra");
  });
});  