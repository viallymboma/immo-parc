import React from 'react';

import {
  TaskDataType,
  tasks,
} from '@/components/common/backbone/other_component/data';
import NavigationContent
  from '@/components/common/navigation/NavigationContent';
import TaskDetailCard from '@/components/common/TaskDetailCard';

// import TaskList from '@/components/common/TaskList';

const TaskListModule = () => {
    const extractCategories = Array.from(new Set(
        tasks.map((prop: TaskDataType) => prop?.taskStatus)
    ));
    return (
        <div>
            <NavigationContent 
                listClass='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
                buttonList={ extractCategories }
            >
                {tasks.map((task: TaskDataType) => (
                    <TaskDetailCard key={task?.id} task={task} />
                ))}
            </NavigationContent>
            {/* <TaskList itemsFilterList={extractCategories} itemsList={tasks} /> */}
        </div>
    )
}

export default TaskListModule