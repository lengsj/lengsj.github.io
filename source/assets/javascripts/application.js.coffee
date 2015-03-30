//= require_tree .

$(document).ready ->
  menuToggle = $("#js-mobile-menu").unbind()
  $("#js-navigation-menu").removeClass "show"
  menuToggle.on "click", (e) ->
    e.preventDefault()
    $("#js-navigation-menu").slideToggle ->
      $("#js-navigation-menu").removeAttr "style" if $("#js-navigation-menu").is(":hidden")
      return

    return

  return

do (jQuery) ->
  jQuery.mark = jump: (options) ->
    defaults = selector: 'a.scroll-on-page-link'
    if typeof options == 'string'
      defaults.selector = options
    options = jQuery.extend(defaults, options)
    jQuery(options.selector).click (e) ->
      jumpobj = jQuery(this)
      target = jumpobj.attr('href')
      thespeed = 1000
      offset = jQuery(target).offset().top
      jQuery('html,body').animate { scrollTop: offset }, thespeed, 'swing'
      e.preventDefault()
      return
  return
jQuery ->
  jQuery.mark.jump()
  return
