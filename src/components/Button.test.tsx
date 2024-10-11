import { render, screen } from '@testing-library/react';
// @ts-ignore
import Button from "./Button";

describe('Button', () => {
    it('buttonタグがレンダリングされる', () => {
        render(<Button label="ボタン" onClick={() => alert('click')} />);
        const element = screen.getByRole('button');
        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent('ボタン');
    });
})