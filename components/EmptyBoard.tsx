import Image from 'next/image';
import { FC } from 'react';
import { Button } from './Button';
import addIcon from '@/assets/icon-add-task-mobile.svg';

const EmptyBoard: FC = () => {
  return (
    <section
      style={{ height: 'calc(100vh - 88px' }}
      className="flex items-center justify-center bg-ghost-white p-4"
    >
      <div className="flex w-7/12 flex-col gap-6">
        <p className="text-center text-lg font-bold text-cool-gray">
          This board is empty. Create a new column to get started.
        </p>
        <Button>
          <Image src={addIcon} alt="add icon" />
          <span className="ml-2">Add New Column</span>
        </Button>
      </div>
    </section>
  );
};

export default EmptyBoard;
