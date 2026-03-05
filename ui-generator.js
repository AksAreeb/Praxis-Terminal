const log = console.log;

log("\n\x1b[38;2;0;240;255m" + "================================================================================" + "\x1b[0m");
log("\x1b[38;2;0;240;255m" + "   P R A X I S   T E R M I N A L   [V1.0.4-ALPHA]   -   CORE ROUTING ENGINE     " + "\x1b[0m");
log("\x1b[38;2;0;240;255m" + "================================================================================" + "\x1b[0m\n");

log("\x1b[33m[SYS]\x1b[0m  Initializing Deterministic Risk Management Engine...");
log("\x1b[33m[SYS]\x1b[0m  Booting API Abstraction... Connecting to Interactive Brokers (localhost:5000)");

setTimeout(() => {
    log("\x1b[32m[OK]\x1b[0m   Connection Established. Auth: U245****");
    log("\x1b[32m[OK]\x1b[0m   Net Liquidation Fetched. Dynamic Capital Routing Constraints [ENABLED]\n");
}, 400);

setTimeout(() => {
    log("\x1b[90m--------------------------------------------------------------------------------\x1b[0m");
    log("\x1b[38;2;0;240;255m[14:30:00.124] [RECV] \x1b[0m INBOUND ALPHA SIGNAL: BUY 500 NQ FUTURES @ MKT");
    log("\x1b[33m[14:30:00.126] [RISK] \x1b[0m EVALUATING: Proposed Sizing vs Max Drawdown Limit (5%)");
}, 1000);

setTimeout(() => {
    log("\x1b[31m[14:30:00.128] [WARN] \x1b[0m CRITICAL: CAPITAL LIMIT EXCEEDED. BLOCKING ROUTE TO EXCHANGE.");
    log("\x1b[33m[14:30:00.891] [SYS]  \x1b[0m Recalculating acceptable parameters via Kelly Criterion...");
}, 1800);

setTimeout(() => {
    log("\x1b[38;2;0;240;255m[14:31:12.004] [RECV] \x1b[0m INBOUND ALPHA SIGNAL: BUY 2 NQ MULTIPLIER @ MKT");
    log("\x1b[33m[14:31:12.006] [RISK] \x1b[0m EVALUATING: Proposal Accepted. Within Guardrails.");
    log("\x1b[32m[14:31:12.015] [EXEC] \x1b[0m ROUTING TRADE TO IBKR...");
}, 2800);

setTimeout(() => {
    log("\x1b[32m[14:31:12.180] [FILLED]\x1b[0m ORDER #7482 FILLED: 2 NQ @ 18450.25");
    log("\x1b[90m--------------------------------------------------------------------------------\x1b[0m\n");
    log("\x1b[35m[STATUS] \x1b[0m System Stable. Awaiting Next Alpha Signal...");
}, 3500);
