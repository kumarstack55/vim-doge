" ==============================================================================
" Filename: indent.vim
" Maintainer: Kim Koomen <koomen@protonail.com>
" License: MIT
" ==============================================================================

let s:save_cpo = &cpoptions
set cpoptions&vim

""
" @public
" Indent a string based on a given line its indent.
function! doge#indent#string(lnum, text)
  if &expandtab
    return repeat(' ', indent(a:lnum)) . a:text
  else
    return repeat("\t", indent(a:lnum) / shiftwidth()) . a:text
  endif
endfunction

let &cpoptions = s:save_cpo
unlet s:save_cpo