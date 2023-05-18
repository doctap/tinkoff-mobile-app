export const BOX_SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.15,
  shadowRadius: 10,
  elevation: 5,
} as const;

export const styleWrapper = {
  wrap: {
    height: '100%',
    with: '100%',
    paddingTop: 30,
    backgroundColor: 'white'
  }
} as const;
