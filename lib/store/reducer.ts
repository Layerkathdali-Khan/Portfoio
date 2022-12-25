type State = {
  theme: string | undefined;
};
type Action = {
  type: string;
  payload: Partial<State>;
};

export function MainReducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_THEME":
      return {
        theme: payload.theme,
      };
    default:
      return state;
  }
}
