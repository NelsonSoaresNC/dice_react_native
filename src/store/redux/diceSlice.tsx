import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface DiceState{
    dice: number,
    sides: number,
}

const initialState: DiceState = {
    dice: 1,
    sides: 6
}

const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    setDice(state, action: PayloadAction<number>) {
      state.dice = action.payload;
    },
    setSides(state, action: PayloadAction<number>) {
      state.sides = action.payload;
    },
    resetDice(state) {
      state.dice = initialState.dice;
      state.sides = initialState.sides;
    },
  },
});

export const { setDice, setSides, resetDice } = diceSlice.actions;
export default diceSlice.reducer;