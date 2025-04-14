import {render, screen} from "@testing-library/react"
import App from "../src/components/App"

test("рендерить Hello World", () => {
    render(<App />)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
})
