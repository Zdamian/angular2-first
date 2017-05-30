import { TestBed, inject } from '@angular/core/testing';

import { TaskThreeService } from './task-three.service';

describe('TaskThreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskThreeService]
    });
  });

  it('should be created', inject([TaskThreeService], (service: TaskThreeService) => {
    expect(service).toBeTruthy();
  }));
});
