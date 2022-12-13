// AUTOGENERATED FILE
// This file was generated from grammar.ohm by `ohm generateBundles`.

import {
  ActionDict,
  Grammar,
  IterationNode,
  Node,
  NonterminalNode,
  Semantics,
  TerminalNode
} from 'ohm-js';

export interface TactActionDict<T> extends ActionDict<T> {
  Program?: (this: NonterminalNode, arg0: IterationNode) => T;
  ProgramItem?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ProgramImport?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;
  Primitive?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;
  StaticFunction?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  NativeFunction_withVoid?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: IterationNode, arg5: NonterminalNode, arg6: NonterminalNode, arg7: TerminalNode, arg8: NonterminalNode, arg9: TerminalNode, arg10: TerminalNode) => T;
  NativeFunction_withType?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: IterationNode, arg5: NonterminalNode, arg6: NonterminalNode, arg7: TerminalNode, arg8: NonterminalNode, arg9: TerminalNode, arg10: TerminalNode, arg11: NonterminalNode, arg12: TerminalNode) => T;
  NativeFunction?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Type_optional?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode) => T;
  Type_required?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Type_map?: (this: NonterminalNode, arg0: TerminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode) => T;
  Type?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Field_default?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  Field_defaultWithInit?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  Field_withSerialization?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: NonterminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  Field_withSerializationAndInit?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: NonterminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: NonterminalNode, arg7: TerminalNode) => T;
  Field?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Struct_originary?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode) => T;
  Struct_message?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode) => T;
  Struct_messageWithId?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: IterationNode, arg7: TerminalNode) => T;
  Struct?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  StructBody?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Contract_simple?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode) => T;
  Contract_withTraits?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode, arg3: NonterminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  Contract?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ContractInit?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  ContractBody?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Trait_originary?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode) => T;
  Trait_withTraits?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: NonterminalNode, arg3: NonterminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  Trait?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  TraitBody?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute_public?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute_getter?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute_mutates?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute_extends?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute_virtual?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute_overwrites?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionAttribute?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Function_withVoid?: (this: NonterminalNode, arg0: IterationNode, arg1: NonterminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: TerminalNode, arg7: IterationNode, arg8: TerminalNode) => T;
  Function_withType?: (this: NonterminalNode, arg0: IterationNode, arg1: NonterminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: TerminalNode, arg7: NonterminalNode, arg8: TerminalNode, arg9: IterationNode, arg10: TerminalNode) => T;
  Function?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  FunctionArg?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ReceiveFunction_simple?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  ReceiveFunction_empty?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: TerminalNode, arg3: TerminalNode, arg4: IterationNode, arg5: TerminalNode) => T;
  ReceiveFunction_comment?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  ReceiveFunction_bounced?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  ReceiveFunction?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Statement?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  StatementBlock?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: TerminalNode) => T;
  StatementLet?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: NonterminalNode, arg4: TerminalNode, arg5: NonterminalNode, arg6: TerminalNode) => T;
  StatementReturn?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;
  StatementExpression?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode) => T;
  StatementAssign?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  StatementCondition_simple?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode) => T;
  StatementCondition_withElse?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode, arg5: NonterminalNode, arg6: TerminalNode, arg7: IterationNode, arg8: TerminalNode) => T;
  StatementCondition_withElseIf?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: IterationNode, arg4: TerminalNode, arg5: NonterminalNode, arg6: NonterminalNode) => T;
  StatementCondition?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  StatementWhile?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  StatementRepeat?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: TerminalNode, arg5: IterationNode, arg6: TerminalNode) => T;
  StatementUntil?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: IterationNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode, arg6: NonterminalNode, arg7: TerminalNode, arg8: TerminalNode) => T;
  LValue_more?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  LValue_single?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  LValue?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  Expression?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionOr_or?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionOr?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionAnd_and?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionAnd?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionCompare_not?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCompare_eq?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCompare_gt?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCompare_gte?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCompare_lt?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCompare_lte?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCompare?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionAdd_add?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionAdd_sub?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionAdd?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionMul_mul?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionMul_div?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionMul_rem?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionMul?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionUnary_neg?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode) => T;
  ExpressionUnary_add?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode) => T;
  ExpressionUnary_not?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode) => T;
  ExpressionUnary?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionUnarySuffix_notNull?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode) => T;
  ExpressionUnarySuffix?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionBracket?: (this: NonterminalNode, arg0: TerminalNode, arg1: NonterminalNode, arg2: TerminalNode) => T;
  ExpressionValue?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  ExpressionField?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionCall?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode, arg4: NonterminalNode, arg5: TerminalNode) => T;
  ExpressionNew?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  NewParameter?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode) => T;
  ExpressionStaticCall?: (this: NonterminalNode, arg0: NonterminalNode, arg1: TerminalNode, arg2: NonterminalNode, arg3: TerminalNode) => T;
  ExpressionInitOf?: (this: NonterminalNode, arg0: NonterminalNode, arg1: NonterminalNode, arg2: TerminalNode, arg3: NonterminalNode, arg4: TerminalNode) => T;
  typeLiteral?: (this: NonterminalNode, arg0: NonterminalNode, arg1: IterationNode) => T;
  typeLiteralPart?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  integerLiteral?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  integerLiteralDec?: (this: NonterminalNode, arg0: IterationNode) => T;
  integerLiteralHex?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode) => T;
  letterAsciiLC?: (this: NonterminalNode, arg0: TerminalNode) => T;
  letterAsciiUC?: (this: NonterminalNode, arg0: TerminalNode) => T;
  letterAscii?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  letterComment?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  idStart?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  idPart?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  id?: (this: NonterminalNode, arg0: NonterminalNode, arg1: IterationNode) => T;
  funcLetter?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  funcId?: (this: NonterminalNode, arg0: NonterminalNode, arg1: IterationNode) => T;
  boolLiteral?: (this: NonterminalNode, arg0: TerminalNode) => T;
  stringLiteralCharacter?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  stringLiteral?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: TerminalNode) => T;
  keyword?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  struct?: (this: NonterminalNode, arg0: TerminalNode) => T;
  contract?: (this: NonterminalNode, arg0: TerminalNode) => T;
  let?: (this: NonterminalNode, arg0: TerminalNode) => T;
  fun?: (this: NonterminalNode, arg0: TerminalNode) => T;
  return?: (this: NonterminalNode, arg0: TerminalNode) => T;
  primitive?: (this: NonterminalNode, arg0: TerminalNode) => T;
  extend?: (this: NonterminalNode, arg0: TerminalNode) => T;
  native?: (this: NonterminalNode, arg0: TerminalNode) => T;
  public?: (this: NonterminalNode, arg0: TerminalNode) => T;
  null?: (this: NonterminalNode, arg0: TerminalNode) => T;
  get?: (this: NonterminalNode, arg0: TerminalNode) => T;
  if?: (this: NonterminalNode, arg0: TerminalNode) => T;
  else?: (this: NonterminalNode, arg0: TerminalNode) => T;
  init?: (this: NonterminalNode, arg0: TerminalNode) => T;
  while?: (this: NonterminalNode, arg0: TerminalNode) => T;
  repeat?: (this: NonterminalNode, arg0: TerminalNode) => T;
  do?: (this: NonterminalNode, arg0: TerminalNode) => T;
  until?: (this: NonterminalNode, arg0: TerminalNode) => T;
  message?: (this: NonterminalNode, arg0: TerminalNode) => T;
  as?: (this: NonterminalNode, arg0: TerminalNode) => T;
  receive?: (this: NonterminalNode, arg0: TerminalNode) => T;
  mutates?: (this: NonterminalNode, arg0: TerminalNode) => T;
  extends?: (this: NonterminalNode, arg0: TerminalNode) => T;
  receiveBounced?: (this: NonterminalNode, arg0: TerminalNode) => T;
  import?: (this: NonterminalNode, arg0: TerminalNode) => T;
  with?: (this: NonterminalNode, arg0: TerminalNode) => T;
  trait?: (this: NonterminalNode, arg0: TerminalNode) => T;
  initOf?: (this: NonterminalNode, arg0: TerminalNode) => T;
  virtual?: (this: NonterminalNode, arg0: TerminalNode) => T;
  overwrites?: (this: NonterminalNode, arg0: TerminalNode) => T;
  nameAttribute?: (this: NonterminalNode, arg0: TerminalNode) => T;
  reservedWord?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  space?: (this: NonterminalNode, arg0: NonterminalNode | TerminalNode) => T;
  comment?: (this: NonterminalNode, arg0: NonterminalNode) => T;
  lineTerminator?: (this: NonterminalNode, arg0: TerminalNode) => T;
  multiLineComment?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode, arg2: TerminalNode) => T;
  singleLineComment?: (this: NonterminalNode, arg0: TerminalNode, arg1: IterationNode) => T;
}

export interface TactSemantics extends Semantics {
  addOperation<T>(name: string, actionDict: TactActionDict<T>): this;
  extendOperation<T>(name: string, actionDict: TactActionDict<T>): this;
  addAttribute<T>(name: string, actionDict: TactActionDict<T>): this;
  extendAttribute<T>(name: string, actionDict: TactActionDict<T>): this;
}

export interface TactGrammar extends Grammar {
  createSemantics(): TactSemantics;
  extendSemantics(superSemantics: TactSemantics): TactSemantics;
}

declare const grammar: TactGrammar;
export default grammar;

