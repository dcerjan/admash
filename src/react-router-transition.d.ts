declare module 'react-router-transition' {
  type AnimatedSwitchProps = {
    atEnter: { opacity: number }
    atLeave: { opacity: number }
    atActive: { opacity: number }
    className: string
  }

  declare class AnimatedSwitch extends React.PureComponent<AnimatedSwitchProps> {}
  export { AnimatedSwitch }
}