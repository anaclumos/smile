import { incrementStorage } from './storage'

export const buttons = [
  {
    text: 'button 1 text',
    func: () => incrementStorage('button1', 1),
  },
  {
    text: 'button 2 text',
    func: () => alert('button 2 pressed'),
  },
  {
    text: 'button 3 text',
    func: () => alert('button 3 pressed'),
  },
  {
    text: 'button 4 text',
    func: () => alert('button 4 pressed'),
  },
  {
    text: 'button 5 text',
    func: () => alert('button 5 pressed'),
  },
]
