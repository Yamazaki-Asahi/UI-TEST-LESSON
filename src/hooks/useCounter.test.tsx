import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react";

describe('useCounter', () => {
    it('increment', () => {
        const { result } = renderHook(() => useCounter(1));
        expect(result.current.count).toBe(1);
        act(() => result.current.increment());
        expect(result.current.count).toBe(2);
    });
});