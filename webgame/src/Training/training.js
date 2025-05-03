import React, { useState } from 'react';
import './training.css';
import { Link } from 'react-router-dom';

export default function Training() {
    const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered

    const handleFlip = (event) => {
        const target = event.currentTarget;
        target.classList.toggle('flipped');
    };

    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const getCardStyle = (cardType, isHovered) => {
        return {
            background: cardType === 'charcoal' ? '#2D2D2D' : '#E0E0E0', // Charcoal or Silver
            color: cardType === 'charcoal' ? '#FFFFFF' : '#333333', // White or Charcoal text
            borderRadius: '15px',
            boxShadow: isHovered
                ? '0 10px 25px rgba(207, 255, 71, 0.6)' // Glow effect on hover
                : '0 6px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
            transform: isHovered ? 'scale(1.05)' : 'scale(1)', // Slight zoom on hover
            transition: 'all 0.3s ease', // Smooth transition
            margin: '20px', // Equal spacing between cards
        };
    };

    const getButtonStyle = () => ({
        fontWeight: '500',
        backgroundColor: '#CFFF47', // Lime Green
        color: '#000000', // Black text for contrast
        border: 'none',
        transition: 'background-color 0.3s ease', // Smooth hover effect
    });

    return (
        <div>
            <div className="container-fluid" style={{ background: 'linear-gradient(135deg, #6E48AA, #4776E6)' }}>
                <div className='row p-5'>
                    <div className='text-center hanoi-title' style={{ fontSize: `4.25em`, color: `#FFFFFF`, textShadow: '0 0 10px #CFFF47' }}>
                        TRAINING CENTER
                    </div>
                    <div className='text-center mt-5' style={{ color: `#FFFFFF`, fontSize: `1.25em` }}>
                        This might just be your most favorite place or your sworn enemy! <br /><br /> The training center consists of 4 carefully
                        picked and curated according <br /> to the needs of individuals with ADHD, to ensure their progress and <br /> betterment
                        in their daily life.
                    </div>
                    <div className='text-center mt-5' style={{ color: `#FFFFFF`, fontSize: `1.25em` }}>
                        Click on any game to get started with your journey!<br /><br />
                        <span className="hover-scroll" onMouseEnter={handleScrollDown}>All the best, Champ!</span>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    {/* Card Flip Game (Charcoal) */}
                    <div
                        className="col-md-5 turns"
                        style={getCardStyle('charcoal', hoveredCard === 'cardFlip')}
                        onMouseEnter={() => setHoveredCard('cardFlip')}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={handleFlip}
                    >
                        <div className="front">
                            <div className='row'>
                                <div style={{ fontSize: `3em` }}>🀧𓍢ִ໋🀦</div>
                                <div>CARD FLIP GAME</div>
                            </div>
                        </div>
                        <div className="back">
                            <div className='row p-4'>
                                <div className='mb-2'>GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🀧𓍢ִ໋🀦</span></div>
                                <div style={{ fontSize: `0.5em` }}>
                                    This is a classic cognitive exercise where you have to match cards by remembering their
                                    location on the grid. You can only view two cards at the same time. This game challenges your
                                    working memory, attention to detail and visual processing skills.
                                </div>
                                <div className='mt-2'>
                                    <Link
                                        to='/memorygame'
                                        className='btn'
                                        style={getButtonStyle()}
                                    >
                                        Let's Play
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tower of Hanoi (Silver) */}
                    <div
                        className="col-md-5 turns"
                        style={getCardStyle('silver', hoveredCard === 'towerOfHanoi')}
                        onMouseEnter={() => setHoveredCard('towerOfHanoi')}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={handleFlip}
                    >
                        <div className="front">
                            <div className='row'>
                                <div style={{ fontSize: `3em` }}>🛕</div>
                                <div>TOWER OF HANOI</div>
                            </div>
                        </div>
                        <div className="back">
                            <div className='row p-4'>
                                <div className='mb-2'>GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🛕</span></div>
                                <div style={{ fontSize: `0.5em` }}>
                                    The Tower of Hanoi is a mathematical puzzle where you move a stack of
                                    disks from one peg to another, following specific rules. This game challenges
                                    spatial reasoning, planning, and sequential processing skills. It improves attention span and
                                    organisation skills as well.
                                </div>
                                <div className='mt-2'>
                                    <Link
                                        to='/hanoi'
                                        className='btn'
                                        style={getButtonStyle()}
                                    >
                                        Let's Play
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pb-5">
                    {/* Number Puzzle Game (Silver) */}
                    <div
                        className="col-md-5 turns"
                        style={getCardStyle('silver', hoveredCard === 'numberPuzzle')}
                        onMouseEnter={() => setHoveredCard('numberPuzzle')}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={handleFlip}
                    >
                        <div className="front">
                            <div className='row p-3'>
                                <div style={{ fontSize: `3em` }}>🔢</div>
                                <div>NUMBER PUZZLE GAME</div>
                            </div>
                        </div>
                        <div className="back">
                            <div className='row p-4'>
                                <div className='mb-2'>GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>🔢</span></div>
                                <div style={{ fontSize: `0.5em` }}>
                                    The 1-15 number puzzle, also known as the sliding puzzle, is a classic game where
                                    you have to rearrange numbered tiles on a grid to form a sequential order. This
                                    game promotes problem-solving skills, spatial reasoning, and concentration. It helps improve
                                    attention and cognitive skills.
                                </div>
                                <div className='mt-2'>
                                    <Link
                                        to='/numberpuzzle'
                                        className='btn'
                                        style={getButtonStyle()}
                                    >
                                        Let's Play
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Chess & Queens Game (Charcoal) */}
                    <div
                        className="col-md-5 turns"
                        style={getCardStyle('charcoal', hoveredCard === 'chessQueens')}
                        onMouseEnter={() => setHoveredCard('chessQueens')}
                        onMouseLeave={() => setHoveredCard(null)}
                        onClick={handleFlip}
                    >
                        <div className="front">
                            <div className='row p-3'>
                                <div style={{ fontSize: `3em` }}>♛</div>
                                <div>CHESS & QUEENS GAME</div>
                            </div>
                        </div>
                        <div className="back">
                            <div className='row p-4'>
                                <div className='mb-2'>GAME OVERVIEW <span style={{ fontSize: `1.75em` }}>♛</span></div>
                                <div style={{ fontSize: `0.5em` }}>
                                    The 8 Queens game is a puzzle that involves placing eight chess queens on an
                                    8×8 chessboard in a way that no two queens threaten each other. This game
                                    requires careful planning, problem-solving, and spatial awareness. It helps improve
                                    impulse control and concentration.
                                </div>
                                <div className='mt-2'>
                                    <Link
                                        to='/eightQueen'
                                        className='btn'
                                        style={getButtonStyle()}
                                    >
                                        Let's Play
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
