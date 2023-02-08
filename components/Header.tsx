import { FC } from 'react';
import Image from 'next/image';
import { Button } from './Button';
import logoMobile from '@/assets/logo-mobile.svg';
import addIcon from '@/assets/icon-add-task-mobile.svg';
import downIcon from '@/assets/icon-chevron-down.svg';
import ellipsisIcon from '@/assets/icon-vertical-ellipsis.svg';

const Header: FC = () => {
  return (
    <header className="flex justify-between bg-white py-5 px-4">
      <div className="flex items-center gap-2">
        <Image src={logoMobile} alt="Kanban logo" />
        <select
          name="project"
          id="project"
          className="form-select border-none text-lg font-bold"
          style={{
            backgroundImage: `url(${downIcon.src})`,
            backgroundSize: '14px',
          }}
        >
          <option value="platform-launch">Platform Launch</option>
        </select>
      </div>
      <div className="flex gap-4">
        <Button intent="secondary">
          <Image src={addIcon} alt="Add icon" className="mx-2 my-1" />
        </Button>
        <Button intent={null} className="pr-0 ">
          <Image src={ellipsisIcon} alt="Ellipsis icon" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
