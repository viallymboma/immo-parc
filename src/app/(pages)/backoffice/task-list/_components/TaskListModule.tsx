import React from 'react';

import {
  TaskDataType,
  tasks,
} from '@/components/common/backbone/other_component/data';
import TaskList from '@/components/common/TaskList';

const TaskListModule = () => {
    const extractCategories = Array.from(new Set(
        tasks.map((prop: TaskDataType) => prop?.taskStatus)
    ));
    return (
        <div>
            {/* <NavigationContent 
                buttonList={ extractCategories }
            >
                {tasks.map((property: TaskDataType) => {
                    return (
                    // <PropertyCard key={property.id} property={property} />
                    <h1 key={ property?.id }>{
                        property?.taskMission
                    }</h1>
                )})}
            </NavigationContent> */}
            <TaskList itemsFilterList={extractCategories} itemsList={tasks} />
        </div>
    )
}

export default TaskListModule