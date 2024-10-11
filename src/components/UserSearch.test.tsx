import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { UserSearch } from "./UserSearch";

const user = userEvent.setup();

jest.mock('axios');
const mockAxios = jest.mocked(axios);
const userInfo = {
  id: 1,
  name: 'Taro'
};

describe('userSearch', () => {
  beforeEach(async () => {
    mockAxios.get.mockReset();
    const resp = { data: userInfo };
    mockAxios.get.mockResolvedValue(resp);
    
    render(<UserSearch />);

    const input = screen.getByRole('textbox');
    await user.type(input, userInfo.name);
    const button = screen.getByRole('button');
    await user.click(button);
  });

  it('入力フォームに入力した内容でAPIリクエストが送信される', async () => {
    expect(mockAxios.get).toHaveBeenCalledWith(`/api/users?query=${userInfo.name}`);
  });

  it('APIに入力した内容で、結果が返ってくるか', async () => {
    await waitFor(() => {
      expect(screen.getByText(userInfo.name)).toBeInTheDocument();
    });
  });
});