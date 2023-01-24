import { Button } from '../shared/Button'
import { StyledTaskMenu } from './StyledTaskMenu'

export function TaskMenu({}: Props) {
  return (
    <StyledTaskMenu>
      <h4>Create new Task</h4>
      <label htmlFor="taskname">Name</label>
      <input
        type="text"
        name="taskname"
        id="taskname"
        placeholder="task name"
      />
      <label htmlFor="taskdescription">Description</label>
      <textarea
        name="taskdescription"
        id="taskdescription"
        cols={30}
        rows={10}
        placeholder="task description"
        style={{ resize: 'none' }}
      ></textarea>

      <Button text="Create" type="submit" />

      <label>Filter </label>
      <select name="filter" id="filter">
        <option value="all">All</option>
        <option value="completed">Open</option>
        <option value="incomplete">In Progress</option>
        <option value="incomplete">Done</option>
      </select>
    </StyledTaskMenu>
  )
}

type Props = {}
