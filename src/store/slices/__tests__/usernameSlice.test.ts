import usernameReducer, {
  assignUsername,
  initialState,
} from "@/store/slices/usernameSlice";

describe("username reducer", () => {
  test("should assign username", () => {
    const username = usernameReducer(initialState, assignUsername("Mick"));
    expect(username).toEqual({ name: "Mick" });
  });

  test("should leave username unchanged", () => {
    const username = usernameReducer(initialState, assignUsername(""));
    expect(username).toEqual(initialState);
  });
});
