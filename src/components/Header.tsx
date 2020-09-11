import React from 'react';


interface IProps {
  children?: any,
  tag?: any,
  className?: string,
}

export default function Header({ children = '', tag: Tag = 'h2', className = '', ...attrs }: IProps) {
  return (
    <section className="row">
      <div className="col">
        <Tag className={className} {...attrs}>{children}</Tag>
        <hr />
      </div>
    </section>
  );
}