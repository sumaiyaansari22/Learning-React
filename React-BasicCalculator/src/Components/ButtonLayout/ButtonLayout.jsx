import React from 'react'
import Button from '../Button/Button'


function ButtonLayout({ count, setCount }) {
    const add = (e) => {
        setCount((prev) => {
            if ((prev[prev.length - 1] == '+' || prev[prev.length - 1] == '-' || prev[prev.length - 1] == '*' || prev[prev.length - 1] == '/')
                && (e.target.innerText == '+' || e.target.innerText == '-' || e.target.innerText == '*' || e.target.innerText == '/')) {
                return prev;
            } else {
                return prev + e.target.innerText;
            }
        });
    }

    const clear = () => {
        setCount("")
    }

    const calc = () => {
        setCount((prev) => eval(prev))
    }

    const del = () => {
        setCount((prev) => prev.slice(0, prev.length - 1));
    }

    return (
        <>
            <div className='flex justify-center'>
                <Button func={clear} text='AC' />
                <Button func={del} text='DEL' />
                <Button func={add} text='/' />
            </div>
            <div className='flex justify-center'>
                <Button func={add} text='1' />
                <Button func={add} text='2' />
                <Button func={add} text='3' />
                <Button func={add} text='*' />
            </div>
            <div className='flex justify-center'>
                <Button func={add} text='4' />
                <Button func={add} text='5' />
                <Button func={add} text='6' />
                <Button func={add} text='+' />
            </div>
            <div className='flex justify-center'>
                <Button func={add} text='7' />
                <Button func={add} text='8' />
                <Button func={add} text='9' />
                <Button func={add} text='-' />
            </div>
            <div className='flex justify-center'>
                <Button func={add} text='.' />
                <Button func={add} text='0' />
                <Button func={calc} text='=' />
            </div>
        </>
    )
}

export default ButtonLayout