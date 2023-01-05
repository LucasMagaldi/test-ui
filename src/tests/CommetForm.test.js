import { screen , render, fireEvent } from "@testing-library/react";
import CommentForm from "../components/CommentForm";

test('Initializing component', () => {
    render(<CommentForm/>);
    const commentInput = screen.getRole("textbox");
    expect(commentInput).toBeInTheDocument();
    const checkbox = screen.getByLabelText("I agree to terms ans conditions", {exact: false});
    expect(checkbox).toBeInTheDocument();
});

test("Enable submit button on type and checkbox list", () => {
    render(<CommentForm/>);
    const checkbox = screen.getByLabelText("I agree to terms ans conditions", {exact: false});
    const submitButton = screen.getByRole("button", {name:'comment', exact: false});
    fireEvent.click(checkbox);

    expect(submitButton).toBeEnabled();
    fireEvent.click(checkbox);
    expect(submitButton).toBeDisabled();
})
