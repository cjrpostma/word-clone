import React from "react";

function GuessForm() {
  const [value, setValue] = React.useState("");

  function handleGuessInputChange(e) {
    setValue(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={handleGuessInputChange}
        type="text"
        value={value}
      />
    </form>
  );
}

export default GuessForm;

// ```html
// <form class="guess-input-wrapper">
//   <label for="guess-input">Enter guess:</label>
//   <input id="guess-input" type="text" />
// </form>
// ```

// **NOTE:** This is the _minimal_ markup required, for the styles to be applied and for accessibility. **It isn't set in stone!** Feel free to make tweaks in order to match all of the acceptance criteria below.

// Here's a quick screen recording of the expected result:

// ![Screen recording showing the guess being entered. It gets logged to the console, and erased from the input](docs/submit-guess.gif)

// **Acceptance Criteria:**

// - Create a new component.
//   - (Don't forget, you can use an NPM script to generate the scaffolding for you!)
// - This component should render a `<form>` tag, including a label and a text input.
// - The text input should be controlled by React state.
// - When the form is submitted:
//   - The entered value should be logged to the console (for now).
//   - The input should be reset to an empty string.
// - **The user's input should be converted to ALL UPPERCASE.** No lower-case letters allowed.
// - The input should have a minimum and maximum length of 5.
//   - **NOTE:** The `minLength` validator is a bit funky; you may wish to use the `pattern` attribute instead. This is discussed in more detail on the [Solution page](https://courses.joshwcomeau.com/joy-of-react/project-wordle/06-solution#an-alternative-to-minlength).
