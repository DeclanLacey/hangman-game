import MainMenu from "../components/MainMenu"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

test('renders how to play button',  () => {
    render(<MainMenu />)
    const btnElement = screen.getByText(/how to play/i)
    expect(btnElement).toBeInTheDocument()
})

test('renders play button', () => {
    render (<MainMenu />)
    const btnElement = screen.getByTitle("play-btn")
    expect(btnElement).toBeInTheDocument()
})



