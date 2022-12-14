// Imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Footer Function
function Footer() {
    // Declaration
    const style = {
        background: 'linear-gradient(#FFFFFF, #CDB4DB)',
    };
    
    // JSX return
    return (
        <div style={style} className="fixed-bottom pt-4 border-top">
            <Container className="footer">
                <Row>
                    <Col className="footText"><p> 2022 - &copy; Jeffrey Young</p></Col>

                    <Col>
                        <Row>
                            {/* Links to Socials - GitHub ~ LinkedIn ~ Email (respectively) */}
                            <Col>
                                <a href="https://github.com/jeffymiyoung" rel="noreferrer" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="44"
                                        height="44"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#000"
                                            fillRule="evenodd"
                                            d="M7.393 2.551a.5.5 0 00-.667.223c-.176.347-.237.77-.245 1.177-.009.416.037.861.111 1.282.075.423.179.833.292 1.181.053.161.11.317.17.46-.972.921-1.522 2.464-1.058 3.961.523 1.694 2.271 3.144 5.673 3.66a.5.5 0 10.15-.99c-3.202-.484-4.503-1.784-4.868-2.965-.376-1.216.165-2.502 1.026-3.138a.5.5 0 00.12-.677c-.062-.095-.16-.308-.262-.621a7.804 7.804 0 01-.258-1.044 5.795 5.795 0 01-.097-1.089 3.14 3.14 0 01.015-.247c.353.184.72.387 1.068.603.538.334.996.679 1.282 1.003a.5.5 0 00.596.119c.935-.46 2.126-.699 3.272-.699 1.155 0 2.188.242 2.838.668a.5.5 0 00.722-.196c.138-.279.504-.61 1.006-.956.297-.205.59-.382.856-.542l.011.078c.036.278.035.628.009 1.012-.047.69-.17 1.421-.255 1.938l-.028.167a.5.5 0 00.038.289c.486 1.063.801 2.288.422 3.39-.368 1.07-1.452 2.192-4.16 2.92a.5.5 0 00-.186.87c.762.617 2.05 2.153 2.95 3.927.226.446.125.839-.146 1.122-.288.3-.787.487-1.346.388-1.01-.178-2.148-.325-3.175-.325-1.238 0-2.853.213-4.224.44-.55.09-1.01-.106-1.26-.394-.234-.271-.313-.652-.06-1.082.51-.871 1.127-1.635 1.753-2.046a.5.5 0 00.128-.716 2.59 2.59 0 00-1.172-.853c-.637-.232-1.471-.26-2.483.195-.483.217-.88.246-1.194.181a1.46 1.46 0 01-.79-.457c-.439-.479-.563-1.16-.395-1.584a.5.5 0 00-.93-.368c-.333.843-.06 1.92.587 2.627a2.46 2.46 0 001.328.762c.548.112 1.158.041 1.804-.249.792-.356 1.357-.303 1.73-.167.133.048.247.109.344.173-.608.536-1.144 1.263-1.573 1.996-.473.806-.343 1.653.167 2.242.495.572 1.313.869 2.179.726 1.364-.225 2.91-.426 4.06-.426.945 0 2.018.136 3.002.31.868.154 1.71-.126 2.241-.68.548-.572.746-1.42.317-2.267-.738-1.454-1.729-2.778-2.552-3.635 2.323-.784 3.537-1.953 4.002-3.304.485-1.413.094-2.873-.395-3.99a.882.882 0 00.003-.017c.085-.512.216-1.293.266-2.035a6.416 6.416 0 00-.014-1.206c-.044-.348-.146-.753-.417-1.028a.5.5 0 00-.623-.07c-.093.058-.215.131-.354.215-.303.18-.686.41-1.033.65-.358.246-.75.55-1.04.896-.832-.404-1.893-.589-2.958-.589-1.142 0-2.35.212-3.38.65-.355-.334-.797-.646-1.243-.922a20.102 20.102 0 00-1.697-.927z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                            </Col>

                            <Col>
                                <a href="https://www.linkedin.com/in/jeffrey-young-446566b1/" rel="noreferrer" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        enableBackground="new 0 0 512 512"
                                        version="1.1"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve"
                                    >
                                        <path d="M503.983 92.994A8.017 8.017 0 00512 84.977V42.221C512 18.941 493.059 0 469.779 0H42.221C18.941 0 0 18.941 0 42.221v427.557C0 493.059 18.941 512 42.221 512h427.557C493.059 512 512 493.059 512 469.779V119.182a8.017 8.017 0 00-8.017-8.017 8.017 8.017 0 00-8.017 8.017v350.597c0 14.44-11.747 26.188-26.188 26.188H42.221c-14.44 0-26.188-11.748-26.188-26.188V42.221c0-14.44 11.748-26.188 26.188-26.188h427.557c14.441 0 26.188 11.748 26.188 26.188v42.756a8.017 8.017 0 008.017 8.017z"></path>
                                        <path d="M153.386 238.898a8.017 8.017 0 008.017-8.017v-34.739a8.017 8.017 0 00-8.017-8.017H84.977a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V266.154a8.017 8.017 0 00-16.034 0v152.852H92.994V204.159h52.376v26.722a8.017 8.017 0 008.016 8.017zM408.05 210.086c-16.319-13.956-37.454-21.96-57.987-21.96-33.891 0-55.359 11.268-68.944 25.151v-17.134a8.017 8.017 0 00-8.017-8.017h-68.409a8.017 8.017 0 00-8.017 8.017v230.881a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V315.858c0-21.457 18.032-34.739 34.739-34.739 20.129 0 34.739 14.61 34.739 34.739v111.165a8.017 8.017 0 008.017 8.017h68.409a8.017 8.017 0 008.017-8.017V264.551c0-20.236-9.586-39.579-26.99-54.465zm10.956 208.92H366.63V315.858c0-28.946-21.828-50.772-50.772-50.772-24.418 0-50.772 19.412-50.772 50.772v103.148H212.71V204.159h52.376v34.739c0 3.656 2.573 6.926 6.125 7.789 3.66.888 7.55-.973 9.15-4.385 11.871-25.31 35.323-38.143 69.703-38.143 32.545 0 68.944 25.828 68.944 60.392v154.455zM119.182 76.96c-23.281 0-42.221 18.941-42.221 42.221s18.941 42.221 42.221 42.221 42.221-18.941 42.221-42.221-18.941-42.221-42.221-42.221zm0 68.41c-14.44 0-26.188-11.748-26.188-26.188s11.748-26.188 26.188-26.188 26.188 11.748 26.188 26.188-11.749 26.188-26.188 26.188z"></path>
                                    </svg>
                                </a>
                            </Col>

                            <Col>
                                <a href="mailto: jeffreymiyoung@aol.com">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        enableBackground="new 0 0 512 512"
                                        version="1.1"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve"
                                    >
                                        <path d="M3.217 126.14L224.87 302.686c1.579 1.331 15.821 13.047 31.13 13.047 15.377 0 29.747-11.281 31.292-12.535l221.5-177.067a8.519 8.519 0 003.208-6.664C512 95.94 492.86 76.8 469.333 76.8H42.667C19.14 76.8 0 95.94 0 119.467a8.535 8.535 0 003.217 6.673zm39.45-32.273h426.667c12.8 0 23.441 9.446 25.31 21.726L276.599 289.894c-3.038 2.44-12.672 8.772-20.599 8.772-7.689 0-17.109-6.502-20.284-9.165L17.357 115.584c1.877-12.279 12.51-21.717 25.31-21.717zM156.86 274.893L37.393 368.759c-3.703 2.91-4.343 8.277-1.434 11.981a8.502 8.502 0 006.707 3.26 8.498 8.498 0 005.274-1.826l119.467-93.867c3.703-2.91 4.344-8.277 1.434-11.981-2.91-3.712-8.278-4.343-11.981-1.433zM355.14 274.893c-3.703-2.91-9.071-2.27-11.981 1.434s-2.27 9.071 1.434 11.981l119.467 93.867a8.492 8.492 0 005.265 1.826 8.52 8.52 0 006.716-3.26c2.91-3.703 2.27-9.071-1.434-11.981L355.14 274.893z"></path>
                                        <path d="M503.467 153.6a8.536 8.536 0 00-8.533 8.533v230.4c0 14.114-11.486 25.6-25.6 25.6H42.667c-14.114 0-25.6-11.486-25.6-25.6v-230.4c0-4.71-3.823-8.533-8.533-8.533S0 157.423 0 162.133v230.4C0 416.06 19.14 435.2 42.667 435.2h426.667c23.526 0 42.667-19.14 42.667-42.667v-230.4c-.001-4.71-3.824-8.533-8.534-8.533z"></path>
                                    </svg>
                                </a>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

// Export for External
export default Footer;