import { render, fireEvent, screen, cleanup  } from '@testing-library/react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe("Reward", () => {
  afterEach(cleanup);

  // snapshot test
  it('should match snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  // default
  it('should render default Reward App', () => {
    const wrapper = render(<App />);
    const pointEle = wrapper.getByTestId("points");
    const rewardEle = wrapper.getByTestId("reward");

    expect(pointEle).toHaveTextContent("0");
    expect(rewardEle).toHaveTextContent("0");
  });

  // click on button
  it('button should work', () => {
    const wrapper = render(<App />);
    const button = wrapper.getByTestId("points");
    button.onclick = jest.fn();

    expect(button.onclick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(button.onclick).toHaveBeenCalledTimes(1);
  })
})