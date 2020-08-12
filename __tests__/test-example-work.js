/**
 * @jest-environment node
 */
import React from 'react';
import {shallow}  from 'enzyme';
import ExampleWork, {ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });

const myWork = [
  {
    'title': `Software Development
    /Cloud`,
    'image': {
      'desc': "screenshot of AWS",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
  'title': "  Business Analytics & Data Science",
  'image': {
    'desc': " screenshot of analytical code",
    'src': "images/example2.png",
    'comment': ""
   }
 }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork} />);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });
  it("Should contain as many children as there are work examples", () =>{
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

  it("Should allows the modal to open and close", () => {
     component.instance().openModal();
     expect(component.instance().state.modalOpen).toBe(true);

     component.instance().closeModal();
     expect(component.instance().state.modalOpen).toBe(false);
  });
});

describe("ExampleWorkBubble component", () =>{
  let mockOpenModalfn=jest.fn();
  let component = shallow(<ExampleWorkBubble example={myWork[1]}
    openModal={mockOpenModalfn}/>);

  let images= component.find("img");
  it("Should conatin a single 'img' element", () =>{
    expect(images.length).toEqual(1);
  });
  it("Should have the image src set correctly", () =>{
    expect(images.prop('src')).toEqual(myWork[1].image.src);
  });
  it("Should call the openModal handler when clicjed", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalfn).toHaveBeenCalled();
  })
});
