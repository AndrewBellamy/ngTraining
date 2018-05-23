import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner-inline.component';

describe('BannerComponent (inline template)', () => {

  let comp:    BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true}
      ]
    })

    fixture = TestBed.createComponent(BannerComponent)

    comp = fixture.componentInstance

    de = fixture.debugElement.query(By.css('h1'))
    el = de.nativeElement
  })
  
  it('should display original title', () => {
    fixture.detectChanges()
    expect(el.textContent).toContain(comp.title)
  })

  it('should display a different test title', () => {
    comp.title = 'Test title'
    fixture.detectChanges()
    expect(el.textContent).toContain('Test title')
  })

  it('should still see original title after comp.title change', () => {
    const oldTitle = comp.title
    comp.title = 'Test Title'
    expect(el.textContent).toContain(oldTitle)
  })
});
