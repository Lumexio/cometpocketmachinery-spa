import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('Comet Pocket Machinery SPA - Root Smoke Test', () => {
  beforeEach(() => {
    window.history.pushState({}, 'Test', '/');
  });

  afterEach(() => {
    cleanup();
  });

  it('mounts and renders the root application without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });

  it('renders brand header and primary navigation links', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/COMET POCKET/i);
    expect(brandElements.length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Ecosystem Portfolio/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Roadmap & Labs/i).length).toBeGreaterThan(0);
  });

  it('renders footer copyright and ecosystem info', () => {
    render(<App />);
    const footerElements = screen.getAllByText(/Comet Pocket Machinery/i);
    expect(footerElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/High-Utility Enterprise Ecosystem/i)).toBeDefined();
  });
});
